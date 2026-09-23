import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfProgressElement } from '../elements/SfProgress.js';

export type SfProgressReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfProgressElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfProgress: ForwardRefExoticComponent<SfProgressReactProps & RefAttributes<SfProgressElement>>;
export { SfProgress };
export default SfProgress;
