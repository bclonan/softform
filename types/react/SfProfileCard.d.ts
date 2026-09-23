import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfProfileCardElement } from '../elements/SfProfileCard.js';

export type SfProfileCardReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfProfileCardElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfProfileCard: ForwardRefExoticComponent<SfProfileCardReactProps & RefAttributes<SfProfileCardElement>>;
export { SfProfileCard };
export default SfProfileCard;
