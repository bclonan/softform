import type { DefineComponent } from 'vue';
export interface SfSliderProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  unit?: string;
  ticks?: boolean;
}
declare const SfSlider: DefineComponent<SfSliderProps>;
export default SfSlider;
