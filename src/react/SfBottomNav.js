import { registerSfBottomNav } from '../elements/SfBottomNav.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-bottom-nav>. Data props become DOM properties. */
export const SfBottomNav = createReactComponent(registerSfBottomNav, 'sf-bottom-nav', ["update:modelValue"]);
export default SfBottomNav;
