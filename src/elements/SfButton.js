import component from '../components/SfButton.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-button';
export function registerSfButton(registry) {
  return registerSoftformElement(component, registry);
}
