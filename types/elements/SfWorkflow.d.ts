/** Set complex values as DOM properties, not string attributes. */
export type SfWorkflowElement = HTMLElement & {
  modelValue?: string;
  nodes?: unknown[];
  value?: string;
};
export declare const tagName: 'sf-workflow';
export declare function registerSfWorkflow(registry?: CustomElementRegistry): CustomElementConstructor & { new(): SfWorkflowElement };
