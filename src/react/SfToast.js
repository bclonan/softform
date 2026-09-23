import { registerSfToast } from '../elements/SfToast.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-toast>. Data props become DOM properties. */
export const SfToast = createReactComponent(registerSfToast, 'sf-toast', ["dismiss"]);
export default SfToast;
