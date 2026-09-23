/** Set complex values as DOM properties, not string attributes. */
export type SfAvatarElement = HTMLElement & {
  initials?: string;
  icon?: string;
  size?: string;
  tone?: string;
  label?: string;
};
export declare const tagName: 'sf-avatar';
export declare function registerSfAvatar(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfAvatarElement };
