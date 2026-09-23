import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfBreadcrumbsElement } from '../elements/SfBreadcrumbs.js';

export type SfBreadcrumbsReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfBreadcrumbsElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfBreadcrumbs: ForwardRefExoticComponent<SfBreadcrumbsReactProps & RefAttributes<SfBreadcrumbsElement>>;
export { SfBreadcrumbs };
export default SfBreadcrumbs;
