import { registerSfSlider } from '../elements/SfSlider.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-slider>. Data props become DOM properties. */
export const SfSlider = createReactComponent(registerSfSlider, 'sf-slider', ["update:modelValue"]);
export default SfSlider;
