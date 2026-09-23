import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfButtonElement } from '../elements/SfButton.js';

export type SfButtonReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfButtonElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfButton: ForwardRefExoticComponent<SfButtonReactProps & RefAttributes<SfButtonElement>>;
export { SfButton };
export default SfButton;
