import type { DefineComponent } from 'vue';
export interface SfAlertProps {
  as?: string;
  title?: string;
  message?: string;
  tone?: string;
}
declare const SfAlert: DefineComponent<SfAlertProps>;
export default SfAlert;
