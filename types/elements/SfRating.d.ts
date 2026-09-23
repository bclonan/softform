/** Set complex values as DOM properties, not string attributes. */
export type SfRatingElement = HTMLElement & {
  modelValue?: number;
  max?: number;
  label?: string;
  value?: number;
};
export declare const tagName: 'sf-rating';
export declare function registerSfRating(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfRatingElement };
