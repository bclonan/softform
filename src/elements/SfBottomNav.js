import component from '../components/SfBottomNav.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-bottom-nav';
export function registerSfBottomNav(registry) {
  return registerSoftformElement(component, registry);
}
