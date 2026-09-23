import component from '../components/SfStepper.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-stepper';
export function registerSfStepper(registry) {
  return registerSoftformElement(component, registry);
}
