import component from '../components/SfBarChart.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-bar-chart';
export function registerSfBarChart(registry) {
  return registerSoftformElement(component, registry);
}
