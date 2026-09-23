import { registerSfProfileCard } from '../elements/SfProfileCard.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-profile-card>. Data props become DOM properties. */
export const SfProfileCard = createReactComponent(registerSfProfileCard, 'sf-profile-card', ["action"]);
export default SfProfileCard;
