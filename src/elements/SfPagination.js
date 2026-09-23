import component from '../components/SfPagination.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-pagination';
export function registerSfPagination(registry) {
  return registerSoftformElement(component, registry);
}
