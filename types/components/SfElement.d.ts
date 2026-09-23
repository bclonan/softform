import type { DefineComponent } from 'vue';
export interface SfElementProps {
  as?: keyof HTMLElementTagNameMap | (string & {});
}
declare const SfElement: DefineComponent<SfElementProps>;
export default SfElement;
