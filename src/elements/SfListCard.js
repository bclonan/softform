import component from '../components/SfListCard.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-list-card';
export function registerSfListCard(registry) {
  return registerSoftformElement(component, registry);
}
