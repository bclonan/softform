import component from '../components/SfCalendar.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-calendar';
export function registerSfCalendar(registry) {
  return registerSoftformElement(component, registry);
}
