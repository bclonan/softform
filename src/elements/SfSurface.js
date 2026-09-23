import component from '../components/SfSurface.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-surface';
export function registerSfSurface(registry) {
  return registerSoftformElement(component, registry);
}
