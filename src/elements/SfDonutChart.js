import component from '../components/SfDonutChart.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-donut-chart';
export function registerSfDonutChart(registry) {
  return registerSoftformElement(component, registry);
}
