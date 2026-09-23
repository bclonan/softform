import { registerSfSelect } from '../elements/SfSelect.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-select>. Data props become DOM properties. */
export const SfSelect = createReactComponent(registerSfSelect, 'sf-select', ["update:modelValue"]);
export default SfSelect;
