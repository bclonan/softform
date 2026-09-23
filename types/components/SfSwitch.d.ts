import type { DefineComponent } from 'vue';
export interface SfSwitchProps {
  modelValue?: boolean;
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
}
declare const SfSwitch: DefineComponent<SfSwitchProps>;
export default SfSwitch;
