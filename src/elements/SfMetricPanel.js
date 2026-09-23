import component from '../components/SfMetricPanel.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-metric-panel';
export function registerSfMetricPanel(registry) {
  return registerSoftformElement(component, registry);
}
