import type { DefineComponent } from 'vue';
export interface SfPaginationProps {
  modelValue?: number;
  pages?: number;
  motion?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  motionEasing?: string;
}
declare const SfPagination: DefineComponent<SfPaginationProps>;
export default SfPagination;
