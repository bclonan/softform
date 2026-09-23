import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfDividerElement } from '../elements/SfDivider.js';

export type SfDividerReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfDividerElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfDivider: ForwardRefExoticComponent<SfDividerReactProps & RefAttributes<SfDividerElement>>;
export { SfDivider };
export default SfDivider;
