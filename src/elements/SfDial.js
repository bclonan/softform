import component from '../components/SfDial.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-dial';
export function registerSfDial(registry) {
  return registerSoftformElement(component, registry);
}
