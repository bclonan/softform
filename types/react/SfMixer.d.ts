import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfMixerElement } from '../elements/SfMixer.js';

export type SfMixerReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfMixerElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: NonNullable<SfMixerElement['modelValue']>, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfMixer: ForwardRefExoticComponent<SfMixerReactProps & RefAttributes<SfMixerElement>>;
export { SfMixer };
export default SfMixer;
