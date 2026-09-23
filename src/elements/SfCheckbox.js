import component from '../components/SfCheckbox.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-checkbox';
export function registerSfCheckbox(registry) {
  return registerSoftformElement(component, registry);
}
