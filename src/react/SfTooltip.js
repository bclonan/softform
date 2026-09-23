import { registerSfTooltip } from '../elements/SfTooltip.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-tooltip>. Data props become DOM properties. */
export const SfTooltip = createReactComponent(registerSfTooltip, 'sf-tooltip', []);
export default SfTooltip;
