import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfBottomNavElement } from '../elements/SfBottomNav.js';

export type SfBottomNavReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfBottomNavElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfBottomNavElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfBottomNav: ForwardRefExoticComponent<SfBottomNavReactProps & RefAttributes<SfBottomNavElement>>;
export { SfBottomNav };
export default SfBottomNav;
