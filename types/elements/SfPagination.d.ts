/** Set complex values as DOM properties, not string attributes. */
export type SfPaginationElement = HTMLElement & {
  modelValue?: number;
  pages?: number;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
  value?: number;
};
export declare const tagName: 'sf-pagination';
export declare function registerSfPagination(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfPaginationElement };
