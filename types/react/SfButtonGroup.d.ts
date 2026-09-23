import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfButtonGroupElement } from '../elements/SfButtonGroup.js';

export type SfButtonGroupReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfButtonGroupElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfButtonGroupElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfButtonGroup: ForwardRefExoticComponent<SfButtonGroupReactProps & RefAttributes<SfButtonGroupElement>>;
export { SfButtonGroup };
export default SfButtonGroup;
