import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfStepperElement } from '../elements/SfStepper.js';

export type SfStepperReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfStepperElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfStepperElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfStepper: ForwardRefExoticComponent<SfStepperReactProps & RefAttributes<SfStepperElement>>;
export { SfStepper };
export default SfStepper;
