import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfDrawerElement } from '../elements/SfDrawer.js';

export type SfDrawerReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfDrawerElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfDrawerElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfDrawer: ForwardRefExoticComponent<SfDrawerReactProps & RefAttributes<SfDrawerElement>>;
export { SfDrawer };
export default SfDrawer;
