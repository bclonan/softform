import { registerSfFileUpload } from '../elements/SfFileUpload.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-file-upload>. Data props become DOM properties. */
export const SfFileUpload = createReactComponent(registerSfFileUpload, 'sf-file-upload', ["select"]);
export default SfFileUpload;
