/** Set complex values as DOM properties, not string attributes. */
export type SfTimelineElement = HTMLElement & {
  items?: unknown[];
};
export declare const tagName: 'sf-timeline';
export declare function registerSfTimeline(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfTimelineElement };
