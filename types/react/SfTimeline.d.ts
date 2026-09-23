import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfTimelineElement } from '../elements/SfTimeline.js';

export type SfTimelineReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfTimelineElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfTimeline: ForwardRefExoticComponent<SfTimelineReactProps & RefAttributes<SfTimelineElement>>;
export { SfTimeline };
export default SfTimeline;
