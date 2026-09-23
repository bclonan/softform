import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfEmptyStateElement } from '../elements/SfEmptyState.js';

export type SfEmptyStateReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfEmptyStateElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfEmptyState: ForwardRefExoticComponent<SfEmptyStateReactProps & RefAttributes<SfEmptyStateElement>>;
export { SfEmptyState };
export default SfEmptyState;
