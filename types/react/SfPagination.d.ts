import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfPaginationElement } from '../elements/SfPagination.js';

export type SfPaginationReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfPaginationElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfPaginationElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfPagination: ForwardRefExoticComponent<SfPaginationReactProps & RefAttributes<SfPaginationElement>>;
export { SfPagination };
export default SfPagination;
