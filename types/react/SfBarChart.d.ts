import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfBarChartElement } from '../elements/SfBarChart.js';

export type SfBarChartReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfBarChartElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfBarChart: ForwardRefExoticComponent<SfBarChartReactProps & RefAttributes<SfBarChartElement>>;
export { SfBarChart };
export default SfBarChart;
