import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfListCardElement } from '../elements/SfListCard.js';

export type SfListCardReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfListCardElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfListCard: ForwardRefExoticComponent<SfListCardReactProps & RefAttributes<SfListCardElement>>;
export { SfListCard };
export default SfListCard;
