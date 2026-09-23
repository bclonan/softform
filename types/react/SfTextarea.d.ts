import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfTextareaElement } from '../elements/SfTextarea.js';

export type SfTextareaReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfTextareaElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfTextareaElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfTextarea: ForwardRefExoticComponent<SfTextareaReactProps & RefAttributes<SfTextareaElement>>;
export { SfTextarea };
export default SfTextarea;
