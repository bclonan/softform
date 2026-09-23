import { registerSfDrawer } from '../elements/SfDrawer.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-drawer>. Data props become DOM properties. */
export const SfDrawer = createReactComponent(registerSfDrawer, 'sf-drawer', ["update:modelValue"]);
export default SfDrawer;
