import { registerSfDial } from '../elements/SfDial.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-dial>. Data props become DOM properties. */
export const SfDial = createReactComponent(registerSfDial, 'sf-dial', ["update:modelValue"]);
export default SfDial;
