import { registerSfPagination } from '../elements/SfPagination.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-pagination>. Data props become DOM properties. */
export const SfPagination = createReactComponent(registerSfPagination, 'sf-pagination', ["update:modelValue"]);
export default SfPagination;
