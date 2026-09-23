import { registerSfSkeleton } from '../elements/SfSkeleton.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-skeleton>. Data props become DOM properties. */
export const SfSkeleton = createReactComponent(registerSfSkeleton, 'sf-skeleton', []);
export default SfSkeleton;
