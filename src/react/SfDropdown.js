import { registerSfDropdown } from '../elements/SfDropdown.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-dropdown>. Data props become DOM properties. */
export const SfDropdown = createReactComponent(registerSfDropdown, 'sf-dropdown', ["select"]);
export default SfDropdown;
