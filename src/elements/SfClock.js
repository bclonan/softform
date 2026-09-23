import component from '../components/SfClock.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-clock';
export function registerSfClock(registry) {
  return registerSoftformElement(component, registry);
}
