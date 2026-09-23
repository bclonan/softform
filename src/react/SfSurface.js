import { registerSfSurface } from '../elements/SfSurface.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-surface>. Data props become DOM properties. */
export const SfSurface = createReactComponent(registerSfSurface, 'sf-surface', []);
export default SfSurface;
