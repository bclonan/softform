import type { DefineComponent } from 'vue';
export interface SfToastProps {
  as?: string;
  message?: string;
  dismissible?: boolean;
}
declare const SfToast: DefineComponent<SfToastProps>;
export default SfToast;
