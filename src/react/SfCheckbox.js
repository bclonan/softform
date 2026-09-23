import { registerSfCheckbox } from '../elements/SfCheckbox.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-checkbox>. Data props become DOM properties. */
export const SfCheckbox = createReactComponent(registerSfCheckbox, 'sf-checkbox', ["update:modelValue"]);
export default SfCheckbox;
