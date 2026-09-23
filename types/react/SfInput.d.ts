import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfInputElement } from '../elements/SfInput.js';

export type SfInputReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfInputElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfInputElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfInput: ForwardRefExoticComponent<SfInputReactProps & RefAttributes<SfInputElement>>;
export { SfInput };
export default SfInput;
