/** Set complex values as DOM properties, not string attributes. */
export type SfSurfaceElement = HTMLElement & {
  as?: string;
  depth?: string;
  tone?: string;
};
export declare const tagName: 'sf-surface';
export declare function registerSfSurface(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfSurfaceElement };
