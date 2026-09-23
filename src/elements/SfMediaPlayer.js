import component from '../components/SfMediaPlayer.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-media-player';
export function registerSfMediaPlayer(registry) {
  return registerSoftformElement(component, registry);
}
