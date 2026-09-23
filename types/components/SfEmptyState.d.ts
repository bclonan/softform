import type { DefineComponent } from 'vue';
export interface SfEmptyStateProps {
  as?: string;
  title?: string;
  message?: string;
  action?: string;
  icon?: string;
}
declare const SfEmptyState: DefineComponent<SfEmptyStateProps>;
export default SfEmptyState;
