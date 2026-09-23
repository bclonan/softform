import { registerSfRating } from '../elements/SfRating.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-rating>. Data props become DOM properties. */
export const SfRating = createReactComponent(registerSfRating, 'sf-rating', ["update:modelValue"]);
export default SfRating;
