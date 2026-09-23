import { registerSfAdaptedCards } from '../elements/SfAdaptedCards.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-adapted-cards>. Data props become DOM properties. */
export const SfAdaptedCards = createReactComponent(registerSfAdaptedCards, 'sf-adapted-cards', ["select", "adapted", "error"]);
export default SfAdaptedCards;
