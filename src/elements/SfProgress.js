import component from '../components/SfProgress.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-progress';
export function registerSfProgress(registry) {
  return registerSoftformElement(component, registry);
}
