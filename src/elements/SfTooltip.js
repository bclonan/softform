import component from '../components/SfTooltip.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-tooltip';
export function registerSfTooltip(registry) {
  return registerSoftformElement(component, registry);
}
