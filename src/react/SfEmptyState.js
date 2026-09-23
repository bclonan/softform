import { registerSfEmptyState } from '../elements/SfEmptyState.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-empty-state>. Data props become DOM properties. */
export const SfEmptyState = createReactComponent(registerSfEmptyState, 'sf-empty-state', ["action"]);
export default SfEmptyState;
