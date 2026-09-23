import type { DefineComponent } from 'vue';
export interface SfTableProps {
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
}
declare const SfTable: DefineComponent<SfTableProps>;
export default SfTable;
