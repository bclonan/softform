import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfClockElement } from '../elements/SfClock.js';

export type SfClockReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfClockElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfClock: ForwardRefExoticComponent<SfClockReactProps & RefAttributes<SfClockElement>>;
export { SfClock };
export default SfClock;
