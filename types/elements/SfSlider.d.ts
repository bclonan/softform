/** Set complex values as DOM properties, not string attributes. */
export type SfSliderElement = HTMLElement & {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  ticks?: boolean;
  value?: number;
};
export declare const tagName: 'sf-slider';
export declare function registerSfSlider(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSliderElement };
