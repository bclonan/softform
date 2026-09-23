import type { DefineComponent } from 'vue';
export interface SfButtonProps {
  variant?: string;
  size?: string;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: string;
}
declare const SfButton: DefineComponent<SfButtonProps>;
export default SfButton;
