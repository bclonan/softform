import component from '../components/SfSegmented.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-segmented';
export function registerSfSegmented(registry) {
  return registerSoftformElement(component, registry);
}
