import component from '../components/SfButtonGroup.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-button-group';
export function registerSfButtonGroup(registry) {
  return registerSoftformElement(component, registry);
}
