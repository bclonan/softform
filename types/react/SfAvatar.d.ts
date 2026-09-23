import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfAvatarElement } from '../elements/SfAvatar.js';

export type SfAvatarReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfAvatarElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfAvatar: ForwardRefExoticComponent<SfAvatarReactProps & RefAttributes<SfAvatarElement>>;
export { SfAvatar };
export default SfAvatar;
