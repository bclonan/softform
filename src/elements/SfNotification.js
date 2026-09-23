import component from '../components/SfNotification.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-notification';
export function registerSfNotification(registry) {
  return registerSoftformElement(component, registry);
}
