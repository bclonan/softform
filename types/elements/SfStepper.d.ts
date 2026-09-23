/** Set complex values as DOM properties, not string attributes. */
export type SfStepperElement = HTMLElement & {
  modelValue?: number;
  min?: number;
  max?: number;
  label?: string;
  value?: number;
};
export declare const tagName: 'sf-stepper';
export declare function registerSfStepper(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfStepperElement };
