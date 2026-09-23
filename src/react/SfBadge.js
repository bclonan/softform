import { registerSfBadge } from '../elements/SfBadge.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-badge>. Data props become DOM properties. */
export const SfBadge = createReactComponent(registerSfBadge, 'sf-badge', []);
export default SfBadge;
