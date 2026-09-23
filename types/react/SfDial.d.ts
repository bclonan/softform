import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfDialElement } from '../elements/SfDial.js';

export type SfDialReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfDialElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfDialElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfDial: ForwardRefExoticComponent<SfDialReactProps & RefAttributes<SfDialElement>>;
export { SfDial };
export default SfDial;
