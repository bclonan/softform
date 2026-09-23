import component from '../components/SfToast.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-toast';
export function registerSfToast(registry) {
  return registerSoftformElement(component, registry);
}
