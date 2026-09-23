import { registerSfModal } from '../elements/SfModal.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-modal>. Data props become DOM properties. */
export const SfModal = createReactComponent(registerSfModal, 'sf-modal', ["update:modelValue"]);
export default SfModal;
