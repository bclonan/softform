import { registerSfMediaPlayer } from '../elements/SfMediaPlayer.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-media-player>. Data props become DOM properties. */
export const SfMediaPlayer = createReactComponent(registerSfMediaPlayer, 'sf-media-player', []);
export default SfMediaPlayer;
