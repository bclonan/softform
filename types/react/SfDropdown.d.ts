import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfDropdownElement } from '../elements/SfDropdown.js';

export type SfDropdownReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfDropdownElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfDropdown: ForwardRefExoticComponent<SfDropdownReactProps & RefAttributes<SfDropdownElement>>;
export { SfDropdown };
export default SfDropdown;
