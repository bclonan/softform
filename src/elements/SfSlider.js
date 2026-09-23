import component from '../components/SfSlider.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-slider';
export function registerSfSlider(registry) {
  return registerSoftformElement(component, registry);
}
