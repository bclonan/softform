import component from '../components/SfIcon.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-icon';
export function registerSfIcon(registry) {
  return registerSoftformElement(component, registry);
}
