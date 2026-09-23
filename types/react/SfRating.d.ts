import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfRatingElement } from '../elements/SfRating.js';

export type SfRatingReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfRatingElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfRatingElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfRating: ForwardRefExoticComponent<SfRatingReactProps & RefAttributes<SfRatingElement>>;
export { SfRating };
export default SfRating;
