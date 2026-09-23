import { createElement, forwardRef, useEffect, useRef } from 'react';

const hostAttributes = new Set(['id','className','style','role','slot','title','hidden','tabIndex','lang','dir']);

/**
 * Bridge a Softform custom element to React 18 and 19.
 * Arrays and objects go to DOM properties. Native and Softform events use
 * addEventListener, so React's custom-element event rules do not matter.
 */
export function createReactComponent(register, tagName, softformEvents = []) {
  if (typeof customElements !== 'undefined') register();

  const Component = forwardRef(function SoftformReactComponent(props, forwardedRef) {
    const hostRef = useRef(null);
    const previousProperties = useRef(new Set());

    useEffect(() => {
      register();
      const host = hostRef.current;
      if (!host) return;

      const nextProperties = new Set();
      const listeners = [];
      for (const [name, value] of Object.entries(props)) {
        if (name === 'children' || name === 'onSoftformEvent' || hostAttributes.has(name)) continue;
        if (name === 'onValueChange' && typeof value === 'function') {
          const listener = event => value(event.detail?.value, event);
          host.addEventListener('input', listener);
          listeners.push(['input', listener]);
        } else if (/^on[A-Z]/.test(name) && typeof value === 'function') {
          const eventName = name === 'onUpdateModelValue'
            ? 'update:modelValue'
            : name.slice(2).toLowerCase();
          host.addEventListener(eventName, value);
          listeners.push([eventName, value]);
        } else if (!/^on[A-Z]/.test(name)) {
          host[name] = value;
          nextProperties.add(name);
        }
      }
      for (const name of previousProperties.current) {
        if (!nextProperties.has(name)) host[name] = undefined;
      }
      previousProperties.current = nextProperties;

      if (typeof props.onSoftformEvent === 'function') {
        for (const name of softformEvents) {
          const listener = event => props.onSoftformEvent(name, event);
          host.addEventListener(name, listener);
          listeners.push([name, listener]);
        }
      }
      return () => {
        for (const [name, listener] of listeners) host.removeEventListener(name, listener);
      };
    });

    const rendered = { ref(node) {
      hostRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    } };
    for (const name of hostAttributes) {
      if (name in props) rendered[name] = props[name];
    }
    return createElement(tagName, rendered, props.children);
  });
  Component.displayName = tagName;
  return Component;
}
