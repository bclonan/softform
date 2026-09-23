import component from '../components/SfEmptyState.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-empty-state';
export function registerSfEmptyState(registry) {
  return registerSoftformElement(component, registry);
}
