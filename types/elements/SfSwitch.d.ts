/** Set complex values as DOM properties, not string attributes. */
export type SfSwitchElement = HTMLElement & {
  modelValue?: boolean;
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  value?: boolean;
};
export declare const tagName: 'sf-switch';
export declare function registerSfSwitch(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSwitchElement };
