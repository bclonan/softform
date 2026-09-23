import component from '../components/SfSkeleton.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-skeleton';
export function registerSfSkeleton(registry) {
  return registerSoftformElement(component, registry);
}
