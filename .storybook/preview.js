import {defineCustomElement as defineLitElementComponent} from "../stories/LitElementComponent";

defineLitElementComponent();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}