import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfSkeletonElement } from '../elements/SfSkeleton.js';

export type SfSkeletonReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfSkeletonElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfSkeleton: ForwardRefExoticComponent<SfSkeletonReactProps & RefAttributes<SfSkeletonElement>>;
export { SfSkeleton };
export default SfSkeleton;
