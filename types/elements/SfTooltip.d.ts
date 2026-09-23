/** Set complex values as DOM properties, not string attributes. */
export type SfTooltipElement = HTMLElement & {
  text: string;
};
export declare const tagName: 'sf-tooltip';
export declare function registerSfTooltip(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfTooltipElement };
