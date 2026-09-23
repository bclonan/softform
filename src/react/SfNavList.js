import { registerSfNavList } from '../elements/SfNavList.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-nav-list>. Data props become DOM properties. */
export const SfNavList = createReactComponent(registerSfNavList, 'sf-nav-list', ["update:modelValue"]);
export default SfNavList;
