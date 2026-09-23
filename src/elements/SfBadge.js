import component from '../components/SfBadge.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-badge';
export function registerSfBadge(registry) {
  return registerSoftformElement(component, registry);
}
