import { registerSfRadioGroup } from '../elements/SfRadioGroup.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-radio-group>. Data props become DOM properties. */
export const SfRadioGroup = createReactComponent(registerSfRadioGroup, 'sf-radio-group', ["update:modelValue"]);
export default SfRadioGroup;
