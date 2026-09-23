/** Set complex values as DOM properties, not string attributes. */
export type SfTableElement = HTMLElement & {
  columns?: unknown[];
  rows?: unknown[];
  caption?: string;
  view?: 'table' | 'cards';
  searchable?: boolean;
  searchPlaceholder?: string;
  pageSize?: number;
  loading?: boolean;
  emptyText?: string;
  rowKey?: string;
  compact?: boolean;
};
export declare const tagName: 'sf-table';
export declare function registerSfTable(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfTableElement };
