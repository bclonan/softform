import { registerSfStatCard } from '../elements/SfStatCard.js';
import { createReactComponent } from './createReactComponent.js';

/** React adapter for <sf-stat-card>. Data props become DOM properties. */
export const SfStatCard = createReactComponent(registerSfStatCard, 'sf-stat-card', []);
export default SfStatCard;
