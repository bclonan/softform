import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfModalElement } from '../elements/SfModal.js';

export type SfModalReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfModalElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfModalElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfModal: ForwardRefExoticComponent<SfModalReactProps & RefAttributes<SfModalElement>>;
export { SfModal };
export default SfModal;
