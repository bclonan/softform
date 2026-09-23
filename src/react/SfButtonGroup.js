import { registerSfButtonGroup } from '../elements/SfButtonGroup.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-button-group>. Data props become DOM properties. */
export const SfButtonGroup = createReactComponent(registerSfButtonGroup, 'sf-button-group', ["update:modelValue"]);
export default SfButtonGroup;
