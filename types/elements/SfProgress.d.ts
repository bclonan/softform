/** Set complex values as DOM properties, not string attributes. */
export type SfProgressElement = HTMLElement & {
  value?: number;
  label?: string;
  tone?: string;
  loading?: boolean;
  motionDelay?: number;
  motionDuration?: number;
  animateOnMount?: boolean;
};
export declare const tagName: 'sf-progress';
export declare function registerSfProgress(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfProgressElement };
