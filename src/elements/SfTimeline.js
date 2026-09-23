import component from '../components/SfTimeline.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-timeline';
export function registerSfTimeline(registry) {
  return registerSoftformElement(component, registry);
}
