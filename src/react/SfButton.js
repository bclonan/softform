import { registerSfButton } from '../elements/SfButton.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-button>. Data props become DOM properties. */
export const SfButton = createReactComponent(registerSfButton, 'sf-button', ["click"]);
export default SfButton;
