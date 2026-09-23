import component from '../components/SfSwitch.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-switch';
export function registerSfSwitch(registry) {
  return registerSoftformElement(component, registry);
}
