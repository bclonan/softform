/** Set complex values as DOM properties, not string attributes. */
export type SfSkeletonElement = HTMLElement & {
  kind?: string;
};
export declare const tagName: 'sf-skeleton';
export declare function registerSfSkeleton(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSkeletonElement };
