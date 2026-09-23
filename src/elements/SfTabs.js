import component from '../components/SfTabs.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-tabs';
export function registerSfTabs(registry) {
  return registerSoftformElement(component, registry);
}
