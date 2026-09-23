import component from '../components/SfAccordion.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-accordion';
export function registerSfAccordion(registry) {
  return registerSoftformElement(component, registry);
}
