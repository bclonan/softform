import { registerSfStepper } from '../elements/SfStepper.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-stepper>. Data props become DOM properties. */
export const SfStepper = createReactComponent(registerSfStepper, 'sf-stepper', ["update:modelValue"]);
export default SfStepper;
