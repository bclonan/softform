import { registerSfElement } from '../elements/SfElement.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-element>. Data props become DOM properties. */
export const SfElement = createReactComponent(registerSfElement, 'sf-element', []);
export default SfElement;
