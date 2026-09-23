import { registerSfFab } from '../elements/SfFab.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-fab>. Data props become DOM properties. */
export const SfFab = createReactComponent(registerSfFab, 'sf-fab', ["click"]);
export default SfFab;
