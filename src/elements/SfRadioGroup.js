import component from '../components/SfRadioGroup.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-radio-group';
export function registerSfRadioGroup(registry) {
  return registerSoftformElement(component, registry);
}
