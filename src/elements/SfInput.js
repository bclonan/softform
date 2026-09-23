import component from '../components/SfInput.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-input';
export function registerSfInput(registry) {
  return registerSoftformElement(component, registry);
}
