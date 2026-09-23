import component from '../components/SfDivider.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-divider';
export function registerSfDivider(registry) {
  return registerSoftformElement(component, registry);
}
