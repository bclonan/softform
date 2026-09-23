import component from '../components/SfStatCard.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-stat-card';
export function registerSfStatCard(registry) {
  return registerSoftformElement(component, registry);
}
