import component from '../components/SfWorkflow.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-workflow';
export function registerSfWorkflow(registry) {
  return registerSoftformElement(component, registry);
}
