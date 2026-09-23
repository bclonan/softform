import { registerSfIconButton } from '../elements/SfIconButton.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-icon-button>. Data props become DOM properties. */
export const SfIconButton = createReactComponent(registerSfIconButton, 'sf-icon-button', ["click"]);
export default SfIconButton;
