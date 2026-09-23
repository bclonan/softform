import type { DefineComponent } from 'vue';
export interface SfIconButtonProps {
  icon?: string;
  label: string;
  tone?: string;
  size?: string;
  disabled?: boolean;
  pressed?: boolean;
}
declare const SfIconButton: DefineComponent<SfIconButtonProps>;
export default SfIconButton;
