import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfMetricPanelElement } from '../elements/SfMetricPanel.js';

export type SfMetricPanelReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfMetricPanelElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfMetricPanel: ForwardRefExoticComponent<SfMetricPanelReactProps & RefAttributes<SfMetricPanelElement>>;
export { SfMetricPanel };
export default SfMetricPanel;
