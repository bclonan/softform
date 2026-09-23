import { registerSfAlert } from '../elements/SfAlert.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-alert>. Data props become DOM properties. */
export const SfAlert = createReactComponent(registerSfAlert, 'sf-alert', []);
export default SfAlert;
