import { html, css, LitElement, property, TemplateResult } from 'lit-element';

export class LitElementComponent extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 25px;
            color: #000000;
        }
    `;

    @property({ type: String }) title = 'Click to increment';

    @property({ type: Number }) counter = 0;

    __increment(): void {
        this.counter += 1;
        const event = new CustomEvent('example-event', {
            detail: {
                counter: this.counter,
            },
        });
        this.dispatchEvent(event);
    }

    render(): TemplateResult {
        return html`
            <h2>${this.title}</h2>
            <p>Counter value: ${this.counter}</p>
            <button @click=${this.__increment}>Clicking me should increase the counter value above, but it doesn't</button>
        `;
    }
}

export const componentName = 'lit-element-component';

export function defineCustomElement(): void {
    customElements.get(componentName) || customElements.define(componentName, LitElementComponent);
}
