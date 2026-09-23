import component from '../components/SfModal.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-modal';
export function registerSfModal(registry) {
  return registerSoftformElement(component, registry);
}
