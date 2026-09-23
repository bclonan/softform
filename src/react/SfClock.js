import { registerSfClock } from '../elements/SfClock.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-clock>. Data props become DOM properties. */
export const SfClock = createReactComponent(registerSfClock, 'sf-clock', []);
export default SfClock;
