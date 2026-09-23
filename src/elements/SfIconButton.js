import component from '../components/SfIconButton.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-icon-button';
export function registerSfIconButton(registry) {
  return registerSoftformElement(component, registry);
}
