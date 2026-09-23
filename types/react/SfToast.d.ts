import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfToastElement } from '../elements/SfToast.js';

export type SfToastReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfToastElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfToast: ForwardRefExoticComponent<SfToastReactProps & RefAttributes<SfToastElement>>;
export { SfToast };
export default SfToast;
