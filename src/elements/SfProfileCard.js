import component from '../components/SfProfileCard.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-profile-card';
export function registerSfProfileCard(registry) {
  return registerSoftformElement(component, registry);
}
