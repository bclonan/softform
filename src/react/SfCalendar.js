import { registerSfCalendar } from '../elements/SfCalendar.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-calendar>. Data props become DOM properties. */
export const SfCalendar = createReactComponent(registerSfCalendar, 'sf-calendar', ["update:modelValue"]);
export default SfCalendar;
