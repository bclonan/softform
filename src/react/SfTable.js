import { registerSfTable } from '../elements/SfTable.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-table>. Data props become DOM properties. */
export const SfTable = createReactComponent(registerSfTable, 'sf-table', []);
export default SfTable;
