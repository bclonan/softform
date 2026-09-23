import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import type { SfFileUploadElement } from '../elements/SfFileUpload.js';

export type SfFileUploadReactProps = Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'onInput'> & Partial<Omit<SfFileUploadElement, keyof HTMLElement>> & {
  onClick?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onValueChange?: (value: unknown, event: CustomEvent<{ value: unknown }>) => void;
  onSoftformEvent?: (name: string, event: CustomEvent<unknown[]>) => void;
};
declare const SfFileUpload: ForwardRefExoticComponent<SfFileUploadReactProps & RefAttributes<SfFileUploadElement>>;
export { SfFileUpload };
export default SfFileUpload;
