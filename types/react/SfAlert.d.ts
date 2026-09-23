import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfAlertElement } from '../elements/SfAlert.js';

export type SfAlertReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfAlertElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfAlert: ForwardRefExoticComponent<SfAlertReactProps & RefAttributes<SfAlertElement>>;
export { SfAlert };
export default SfAlert;
