import { registerSfListCard } from '../elements/SfListCard.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-list-card>. Data props become DOM properties. */
export const SfListCard = createReactComponent(registerSfListCard, 'sf-list-card', ["select"]);
export default SfListCard;
