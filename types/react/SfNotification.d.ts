import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfNotificationElement } from '../elements/SfNotification.js';

export type SfNotificationReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfNotificationElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfNotification: ForwardRefExoticComponent<SfNotificationReactProps & RefAttributes<SfNotificationElement>>;
export { SfNotification };
export default SfNotification;
