/** Set complex values as DOM properties, not string attributes. */
export type SfMediaPlayerElement = HTMLElement & {
  src?: string;
  title?: string;
  subtitle?: string;
};
export declare const tagName: 'sf-media-player';
export declare function registerSfMediaPlayer(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfMediaPlayerElement };
