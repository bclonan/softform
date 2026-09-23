import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfAccordionElement } from '../elements/SfAccordion.js';

export type SfAccordionReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfAccordionElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfAccordion: ForwardRefExoticComponent<SfAccordionReactProps & RefAttributes<SfAccordionElement>>;
export { SfAccordion };
export default SfAccordion;
