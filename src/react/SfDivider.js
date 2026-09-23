import { registerSfDivider } from '../elements/SfDivider.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-divider>. Data props become DOM properties. */
export const SfDivider = createReactComponent(registerSfDivider, 'sf-divider', []);
export default SfDivider;
