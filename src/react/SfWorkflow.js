import { registerSfWorkflow } from '../elements/SfWorkflow.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-workflow>. Data props become DOM properties. */
export const SfWorkflow = createReactComponent(registerSfWorkflow, 'sf-workflow', ["update:modelValue"]);
export default SfWorkflow;
