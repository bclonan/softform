import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfSurfaceElement } from '../elements/SfSurface.js';

export type SfSurfaceReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfSurfaceElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfSurface: ForwardRefExoticComponent<SfSurfaceReactProps & RefAttributes<SfSurfaceElement>>;
export { SfSurface };
export default SfSurface;
