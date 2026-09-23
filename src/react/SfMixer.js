import { registerSfMixer } from '../elements/SfMixer.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-mixer>. Data props become DOM properties. */
export const SfMixer = createReactComponent(registerSfMixer, 'sf-mixer', ["update:modelValue"]);
export default SfMixer;
