import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfFabElement } from '../elements/SfFab.js';

export type SfFabReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfFabElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfFab: ForwardRefExoticComponent<SfFabReactProps & RefAttributes<SfFabElement>>;
export { SfFab };
export default SfFab;
