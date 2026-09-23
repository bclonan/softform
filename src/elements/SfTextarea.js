import component from '../components/SfTextarea.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-textarea';
export function registerSfTextarea(registry) {
  return registerSoftformElement(component, registry);
}
