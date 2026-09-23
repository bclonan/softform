/** Set complex values as DOM properties, not string attributes. */
export type SfBreadcrumbsElement = HTMLElement & {
  items?: unknown[];
};
export declare const tagName: 'sf-breadcrumbs';
export declare function registerSfBreadcrumbs(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfBreadcrumbsElement };
