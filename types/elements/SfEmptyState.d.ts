/** Set complex values as DOM properties, not string attributes. */
export type SfEmptyStateElement = HTMLElement & {
  as?: string;
  title?: string;
  message?: string;
  action?: string;
  icon?: string;
};
export declare const tagName: 'sf-empty-state';
export declare function registerSfEmptyState(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfEmptyStateElement };
