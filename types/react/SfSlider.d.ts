import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfSliderElement } from '../elements/SfSlider.js';

export type SfSliderReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfSliderElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfSliderElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfSlider: ForwardRefExoticComponent<SfSliderReactProps & RefAttributes<SfSliderElement>>;
export { SfSlider };
export default SfSlider;
