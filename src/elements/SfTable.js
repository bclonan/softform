import component from '../components/SfTable.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-table';
export function registerSfTable(registry) {
  return registerSoftformElement(component, registry);
}
