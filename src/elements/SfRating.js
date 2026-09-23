import component from '../components/SfRating.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-rating';
export function registerSfRating(registry) {
  return registerSoftformElement(component, registry);
}
