import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfTooltipElement } from '../elements/SfTooltip.js';

export type SfTooltipReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfTooltipElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfTooltip: ForwardRefExoticComponent<SfTooltipReactProps & RefAttributes<SfTooltipElement>>;
export { SfTooltip };
export default SfTooltip;
