import { registerSfSegmented } from '../elements/SfSegmented.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-segmented>. Data props become DOM properties. */
export const SfSegmented = createReactComponent(registerSfSegmented, 'sf-segmented', ["update:modelValue"]);
export default SfSegmented;
