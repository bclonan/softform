import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfElementElement } from '../elements/SfElement.js';

export type SfElementReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfElementElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfElement: ForwardRefExoticComponent<SfElementReactProps & RefAttributes<SfElementElement>>;
export { SfElement };
export default SfElement;
