/** Set complex values as DOM properties, not string attributes. */
export type SfCalendarElement = HTMLElement & {
  modelValue?: string;
  value?: string;
};
export declare const tagName: 'sf-calendar';
export declare function registerSfCalendar(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfCalendarElement };
