import component from '../components/SfFab.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-fab';
export function registerSfFab(registry) {
  return registerSoftformElement(component, registry);
}
