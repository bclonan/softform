import component from '../components/SfSpinner.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-spinner';
export function registerSfSpinner(registry) {
  return registerSoftformElement(component, registry);
}
