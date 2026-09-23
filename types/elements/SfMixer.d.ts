/** Set complex values as DOM properties, not string attributes. */
export type SfMixerElement = HTMLElement & {
  modelValue?: unknown[];
  labels?: unknown[];
  title?: string;
  value?: unknown[];
};
export declare const tagName: 'sf-mixer';
export declare function registerSfMixer(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfMixerElement };
