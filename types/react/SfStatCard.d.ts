import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfStatCardElement } from '../elements/SfStatCard.js';

export type SfStatCardReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfStatCardElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfStatCard: ForwardRefExoticComponent<SfStatCardReactProps & RefAttributes<SfStatCardElement>>;
export { SfStatCard };
export default SfStatCard;
