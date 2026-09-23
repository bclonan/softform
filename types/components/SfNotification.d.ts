import type { DefineComponent } from 'vue';
export interface SfNotificationProps {
  title?: string;
  body?: string;
  sender?: string;
  time?: string;
  icon?: string;
  count?: number;
  action?: string;
}
declare const SfNotification: DefineComponent<SfNotificationProps>;
export default SfNotification;
