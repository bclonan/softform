import { registerSfBreadcrumbs } from '../elements/SfBreadcrumbs.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-breadcrumbs>. Data props become DOM properties. */
export const SfBreadcrumbs = createReactComponent(registerSfBreadcrumbs, 'sf-breadcrumbs', ["navigate"]);
export default SfBreadcrumbs;
