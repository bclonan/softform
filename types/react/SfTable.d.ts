import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfTableElement } from '../elements/SfTable.js';

export type SfTableReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfTableElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfTable: ForwardRefExoticComponent<SfTableReactProps & RefAttributes<SfTableElement>>;
export { SfTable };
export default SfTable;
