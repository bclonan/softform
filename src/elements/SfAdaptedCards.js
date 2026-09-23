import component from '../components/SfAdaptedCards.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-adapted-cards';
export function registerSfAdaptedCards(registry) {
  return registerSoftformElement(component, registry);
}
