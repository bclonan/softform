import { registerSfTextarea } from '../elements/SfTextarea.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-textarea>. Data props become DOM properties. */
export const SfTextarea = createReactComponent(registerSfTextarea, 'sf-textarea', ["update:modelValue"]);
export default SfTextarea;
