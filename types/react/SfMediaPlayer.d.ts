import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfMediaPlayerElement } from '../elements/SfMediaPlayer.js';

export type SfMediaPlayerReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfMediaPlayerElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfMediaPlayer: ForwardRefExoticComponent<SfMediaPlayerReactProps & RefAttributes<SfMediaPlayerElement>>;
export { SfMediaPlayer };
export default SfMediaPlayer;
