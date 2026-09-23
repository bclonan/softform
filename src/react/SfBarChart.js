import { registerSfBarChart } from '../elements/SfBarChart.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-bar-chart>. Data props become DOM properties. */
export const SfBarChart = createReactComponent(registerSfBarChart, 'sf-bar-chart', []);
export default SfBarChart;
