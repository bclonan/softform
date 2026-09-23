import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfWorkflowElement } from '../elements/SfWorkflow.js';

export type SfWorkflowReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfWorkflowElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfWorkflowElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfWorkflow: ForwardRefExoticComponent<SfWorkflowReactProps & RefAttributes<SfWorkflowElement>>;
export { SfWorkflow };
export default SfWorkflow;
