import { registerSfMetricPanel } from '../elements/SfMetricPanel.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-metric-panel>. Data props become DOM properties. */
export const SfMetricPanel = createReactComponent(registerSfMetricPanel, 'sf-metric-panel', []);
export default SfMetricPanel;
