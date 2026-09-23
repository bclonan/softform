/** Set complex values as DOM properties, not string attributes. */
export type SfNotificationElement = HTMLElement & {
  title?: string;
  body?: string;
  sender?: string;
  time?: string;
  icon?: string;
  count?: number;
  action?: string;
};
export declare const tagName: 'sf-notification';
export declare function registerSfNotification(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfNotificationElement };
