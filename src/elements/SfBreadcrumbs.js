import component from '../components/SfBreadcrumbs.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-breadcrumbs';
export function registerSfBreadcrumbs(registry) {
  return registerSoftformElement(component, registry);
}
