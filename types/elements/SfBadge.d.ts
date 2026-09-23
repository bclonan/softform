/** Set complex values as DOM properties, not string attributes. */
export type SfBadgeElement = HTMLElement & {
  as?: string;
  tone?: string;
  dot?: boolean;
};
export declare const tagName: 'sf-badge';
export declare function registerSfBadge(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfBadgeElement };
