/** Set complex values as DOM properties, not string attributes. */
export type SfProfileCardElement = HTMLElement & {
  name?: string;
  role?: string;
  initials?: string;
  status?: string;
};
export declare const tagName: 'sf-profile-card';
export declare function registerSfProfileCard(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfProfileCardElement };
