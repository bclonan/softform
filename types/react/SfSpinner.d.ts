import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfSpinnerElement } from '../elements/SfSpinner.js';

export type SfSpinnerReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfSpinnerElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfSpinner: ForwardRefExoticComponent<SfSpinnerReactProps & RefAttributes<SfSpinnerElement>>;
export { SfSpinner };
export default SfSpinner;
