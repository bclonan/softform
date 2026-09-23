import component from '../components/SfDrawer.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-drawer';
export function registerSfDrawer(registry) {
  return registerSoftformElement(component, registry);
}
