import component from '../components/SfElement.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-element';
export function registerSfElement(registry) {
  return registerSoftformElement(component, registry);
}
