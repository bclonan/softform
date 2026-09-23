import { registerSfSpinner } from '../elements/SfSpinner.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-spinner>. Data props become DOM properties. */
export const SfSpinner = createReactComponent(registerSfSpinner, 'sf-spinner', []);
export default SfSpinner;
