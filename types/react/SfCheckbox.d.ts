import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfCheckboxElement } from '../elements/SfCheckbox.js';

export type SfCheckboxReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfCheckboxElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfCheckboxElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfCheckbox: ForwardRefExoticComponent<SfCheckboxReactProps & RefAttributes<SfCheckboxElement>>;
export { SfCheckbox };
export default SfCheckbox;
