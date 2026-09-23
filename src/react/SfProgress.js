import { registerSfProgress } from '../elements/SfProgress.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-progress>. Data props become DOM properties. */
export const SfProgress = createReactComponent(registerSfProgress, 'sf-progress', []);
export default SfProgress;
