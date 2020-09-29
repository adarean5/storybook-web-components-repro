import {componentName, LitElementComponent} from './LitElementComponent';

class SbComponent extends LitElementComponent {
    constructor() {
        super();
    }
    
    connectedCallback() {
        // @ts-ignore
        this._saveInstanceProperties();
        super.connectedCallback();
    }
}

const sbComponentName = `${componentName}-sb`
customElements.get(sbComponentName) || customElements.define(sbComponentName, SbComponent);

export default {
    title: `REPRO / ${componentName}`,
    component: componentName,
};

const Template = (args: any) => Object.assign(new SbComponent(), args);

export const Primary: any = Template.bind({});
Primary.args = {
    title: 'Click the counter to increment',
    counter: 10,
};
