import { defineCustomElement } from 'vue';
import styles from './styles.css?inline';

const sheetText = styles.replace(/^:root\s*\{/, ':host {');
let sharedSheet;

function installStyles(root) {
  if (!root) return;
  // A single constructable sheet is shared by every instance. The fallback covers
  // browsers without adoptedStyleSheets while keeping styles inside the shadow root.
  if ('adoptedStyleSheets' in root && typeof CSSStyleSheet !== 'undefined') {
    if (!sharedSheet) {
      sharedSheet = new CSSStyleSheet();
      sharedSheet.replaceSync(`:host{display:block;max-width:100%;font-family:var(--sf-font)}\n${sheetText}`);
    }
    if (!root.adoptedStyleSheets.includes(sharedSheet)) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, sharedSheet];
    }
    return;
  }
  if (!root.querySelector('style[data-softform]')) {
    const style = document.createElement('style');
    style.dataset.softform = '';
    style.textContent = `:host{display:block;max-width:100%;font-family:var(--sf-font)}\n${sheetText}`;
    root.prepend(style);
  }
}

function tagFor(name) {
  return name.replace(/^Sf/, 'sf-').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Register one framework-neutral Web Component. The Vue component stays inside
 * a shadow root; consumers use attributes, DOM properties, slots, and DOM events.
 * Model components self-update and emit standard input/change events with detail.value.
 */
export function registerSoftformElement(component, registry = globalThis.customElements) {
  if (!registry) throw new Error('Custom elements are available only in a browser.');
  const tag = tagFor(component.name);
  if (registry.get(tag)) return registry.get(tag);
  const Base = defineCustomElement(component);
  const hasModel = Object.hasOwn(component.props || {}, 'modelValue');
  const emitsClick = component.emits?.includes('click');
  class SoftformElement extends Base {
    constructor() {
      super();
      if (hasModel) {
        // Vue emits update:modelValue with an array in CustomEvent.detail.
        // Reflect that value on the host so plain HTML works without a framework.
        this.addEventListener('update:modelValue', event => {
          const value = event.detail?.[0];
          this.modelValue = value;
          const detail = { value };
          this.dispatchEvent(new CustomEvent('input', { bubbles: true, composed: true, detail }));
          this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail }));
        });
        // Inner native events already reached the Vue handler. Keep host listeners
        // from seeing a native event plus the standard event above for one change.
        for (const type of ['input', 'change']) {
          this.addEventListener(type, event => {
            if (event.composedPath()[0] !== this) event.stopImmediatePropagation();
          });
        }
      }
      if (emitsClick) {
        // A Vue click emit and the inner button click otherwise reach the host twice.
        this.addEventListener('click', event => {
          if (event instanceof MouseEvent && event.composedPath()[0] !== this) {
            event.stopImmediatePropagation();
          }
        });
      }
    }

    connectedCallback() {
      super.connectedCallback();
      installStyles(this.shadowRoot);
    }

  }
  if (hasModel) {
    Object.defineProperty(SoftformElement.prototype, 'value', {
      get() { return this.modelValue; },
      set(value) { this.modelValue = value; },
    });
  }
  registry.define(tag, SoftformElement);
  return SoftformElement;
}
