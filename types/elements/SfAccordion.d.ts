/** Set complex values as DOM properties, not string attributes. */
export type SfAccordionElement = HTMLElement & {
  items?: unknown[];
};
export declare const tagName: 'sf-accordion';
export declare function registerSfAccordion(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfAccordionElement };
