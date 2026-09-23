import { registerSfAvatar } from '../elements/SfAvatar.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-avatar>. Data props become DOM properties. */
export const SfAvatar = createReactComponent(registerSfAvatar, 'sf-avatar', []);
export default SfAvatar;
