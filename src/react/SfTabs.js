import { registerSfTabs } from '../elements/SfTabs.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-tabs>. Data props become DOM properties. */
export const SfTabs = createReactComponent(registerSfTabs, 'sf-tabs', ["update:modelValue"]);
export default SfTabs;
