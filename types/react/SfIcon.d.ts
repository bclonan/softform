import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfIconElement } from '../elements/SfIcon.js';

export type SfIconReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfIconElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfIcon: ForwardRefExoticComponent<SfIconReactProps & RefAttributes<SfIconElement>>;
export { SfIcon };
export default SfIcon;
