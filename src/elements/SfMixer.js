import component from '../components/SfMixer.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-mixer';
export function registerSfMixer(registry) {
  return registerSoftformElement(component, registry);
}
