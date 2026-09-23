export interface CardModel {
  readonly id: string;
  readonly type: 'message' | 'call' | 'status';
  readonly title: string;
  readonly body: string;
  readonly sender: string;
  readonly time: string;
  readonly count: number;
}

export interface Adapter<TPayload = unknown> {
  adapt(payload: TPayload): CardModel[];
}

export declare const ADAPTER_KEY: string;
export declare class NotificationAdapter implements Adapter {
  adapt(payload: unknown): CardModel[];
}
export declare class RestNotificationAdapter extends NotificationAdapter {}
export declare class GraphQLNotificationAdapter extends NotificationAdapter {}
export declare class LegacyNotificationAdapter extends NotificationAdapter {}
export declare class AdapterRegistry {
  register<T>(name: string, adapter: Adapter<T>): this;
  normalize(name: string, payload: unknown): readonly CardModel[];
  names(): string[];
}
export declare function validateCards(cards: unknown): readonly CardModel[];
export declare function createAdapterRegistry(): AdapterRegistry;
export declare const defaultRegistry: AdapterRegistry;
