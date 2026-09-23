import { registerSfTimeline } from '../elements/SfTimeline.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-timeline>. Data props become DOM properties. */
export const SfTimeline = createReactComponent(registerSfTimeline, 'sf-timeline', []);
export default SfTimeline;
