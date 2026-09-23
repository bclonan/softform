import { registerSfAccordion } from '../elements/SfAccordion.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-accordion>. Data props become DOM properties. */
export const SfAccordion = createReactComponent(registerSfAccordion, 'sf-accordion', []);
export default SfAccordion;
