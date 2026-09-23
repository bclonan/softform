import { registerSfDonutChart } from '../elements/SfDonutChart.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-donut-chart>. Data props become DOM properties. */
export const SfDonutChart = createReactComponent(registerSfDonutChart, 'sf-donut-chart', []);
export default SfDonutChart;
