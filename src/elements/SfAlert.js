import component from '../components/SfAlert.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-alert';
export function registerSfAlert(registry) {
  return registerSoftformElement(component, registry);
}
