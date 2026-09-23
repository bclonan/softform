import component from '../components/SfFileUpload.vue';
import { registerSoftformElement } from '../element-runtime.js';

export const tagName = 'sf-file-upload';
export function registerSfFileUpload(registry) {
  return registerSoftformElement(component, registry);
}
