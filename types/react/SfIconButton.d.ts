import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfIconButtonElement } from '../elements/SfIconButton.js';

export type SfIconButtonReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfIconButtonElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfIconButton: ForwardRefExoticComponent<SfIconButtonReactProps & RefAttributes<SfIconButtonElement>>;
export { SfIconButton };
export default SfIconButton;
