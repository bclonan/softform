import { registerSfIcon } from '../elements/SfIcon.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-icon>. Data props become DOM properties. */
export const SfIcon = createReactComponent(registerSfIcon, 'sf-icon', []);
export default SfIcon;
