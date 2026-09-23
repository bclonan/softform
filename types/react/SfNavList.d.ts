import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfNavListElement } from '../elements/SfNavList.js';

export type SfNavListReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfNavListElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfNavListElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfNavList: ForwardRefExoticComponent<SfNavListReactProps & RefAttributes<SfNavListElement>>;
export { SfNavList };
export default SfNavList;
