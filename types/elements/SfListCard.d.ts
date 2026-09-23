/** Set complex values as DOM properties, not string attributes. */
export type SfListCardElement = HTMLElement & {
  title?: string;
  items?: unknown[];
};
export declare const tagName: 'sf-list-card';
export declare function registerSfListCard(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfListCardElement };
