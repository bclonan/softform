import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfDonutChartElement } from '../elements/SfDonutChart.js';

export type SfDonutChartReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfDonutChartElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfDonutChart: ForwardRefExoticComponent<SfDonutChartReactProps & RefAttributes<SfDonutChartElement>>;
export { SfDonutChart };
export default SfDonutChart;
