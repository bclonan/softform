import component from '../components/SfSelect.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-select';
export function registerSfSelect(registry) {
  return registerSoftformElement(component, registry);
}
