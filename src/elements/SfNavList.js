import component from '../components/SfNavList.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-nav-list';
export function registerSfNavList(registry) {
  return registerSoftformElement(component, registry);
}
