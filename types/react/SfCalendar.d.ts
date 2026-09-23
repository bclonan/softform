import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfCalendarElement } from '../elements/SfCalendar.js';

export type SfCalendarReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfCalendarElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfCalendarElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfCalendar: ForwardRefExoticComponent<SfCalendarReactProps & RefAttributes<SfCalendarElement>>;
export { SfCalendar };
export default SfCalendar;
