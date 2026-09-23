/** Set complex values as DOM properties, not string attributes. */
export type SfFileUploadElement = HTMLElement & {
  accept?: string;
  label?: string;
};
export declare const tagName: 'sf-file-upload';
export declare function registerSfFileUpload(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfFileUploadElement };
