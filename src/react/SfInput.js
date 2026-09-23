import { registerSfInput } from '../elements/SfInput.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-input>. Data props become DOM properties. */
export const SfInput = createReactComponent(registerSfInput, 'sf-input', ["update:modelValue"]);
export default SfInput;
