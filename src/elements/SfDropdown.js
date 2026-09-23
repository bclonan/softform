import component from '../components/SfDropdown.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-dropdown';
export function registerSfDropdown(registry) {
  return registerSoftformElement(component, registry);
}
