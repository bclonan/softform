/** Set complex values as DOM properties, not string attributes. */
export type SfAlertElement = HTMLElement & {
  as?: string;
  title?: string;
  message?: string;
  tone?: string;
};
export declare const tagName: 'sf-alert';
export declare function registerSfAlert(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfAlertElement };
