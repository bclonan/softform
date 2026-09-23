/** Set complex values as DOM properties, not string attributes. */
export type SfIconButtonElement = HTMLElement & {
  icon?: string;
  label: string;
  tone?: string;
  size?: string;
  disabled?: boolean;
  pressed?: boolean;
};
export declare const tagName: 'sf-icon-button';
export declare function registerSfIconButton(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfIconButtonElement };
