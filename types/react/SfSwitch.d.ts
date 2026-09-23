import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfSwitchElement } from '../elements/SfSwitch.js';

export type SfSwitchReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfSwitchElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfSwitchElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfSwitch: ForwardRefExoticComponent<SfSwitchReactProps & RefAttributes<SfSwitchElement>>;
export { SfSwitch };
export default SfSwitch;
