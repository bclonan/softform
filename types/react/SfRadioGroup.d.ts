import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfRadioGroupElement } from '../elements/SfRadioGroup.js';

export type SfRadioGroupReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfRadioGroupElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfRadioGroupElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfRadioGroup: ForwardRefExoticComponent<SfRadioGroupReactProps & RefAttributes<SfRadioGroupElement>>;
export { SfRadioGroup };
export default SfRadioGroup;
