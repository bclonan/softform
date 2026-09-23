import component from '../components/SfAvatar.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-avatar';
export function registerSfAvatar(registry) {
  return registerSoftformElement(component, registry);
}
