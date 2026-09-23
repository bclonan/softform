import type { DefineComponent } from 'vue';
export interface SfAdaptedCardsProps {
  adapter?: string;
  payload: Record<string, unknown>;
  registry?: { normalize(adapter: string, payload: Record<string, unknown>): readonly Record<string, unknown>[] };
}
declare const SfAdaptedCards: DefineComponent<SfAdaptedCardsProps>;
export default SfAdaptedCards;
