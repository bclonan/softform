import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfBadgeElement } from '../elements/SfBadge.js';

export type SfBadgeReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfBadgeElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfBadge: ForwardRefExoticComponent<SfBadgeReactProps & RefAttributes<SfBadgeElement>>;
export { SfBadge };
export default SfBadge;
