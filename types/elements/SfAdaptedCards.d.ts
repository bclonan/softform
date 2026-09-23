/** Set complex values as DOM properties, not string attributes. */
export type SfAdaptedCardsElement = HTMLElement & {
  adapter?: string;
  payload: Record<string, unknown>;
  registry?: { normalize(adapter: string, payload: Record<string, unknown>): readonly Record<string, unknown>[] };
};
export declare const tagName: 'sf-adapted-cards';
export declare function registerSfAdaptedCards(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfAdaptedCardsElement };
