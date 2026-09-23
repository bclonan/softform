import { registerSfSwitch } from '../elements/SfSwitch.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-switch>. Data props become DOM properties. */
export const SfSwitch = createReactComponent(registerSfSwitch, 'sf-switch', ["update:modelValue"]);
export default SfSwitch;
