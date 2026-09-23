import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfTabsElement } from '../elements/SfTabs.js';

export type SfTabsReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfTabsElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfTabsElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfTabs: ForwardRefExoticComponent<SfTabsReactProps & RefAttributes<SfTabsElement>>;
export { SfTabs };
export default SfTabs;
