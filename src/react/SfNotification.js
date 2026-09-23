import { registerSfNotification } from '../elements/SfNotification.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-notification>. Data props become DOM properties. */
export const SfNotification = createReactComponent(registerSfNotification, 'sf-notification', ["action"]);
export default SfNotification;
