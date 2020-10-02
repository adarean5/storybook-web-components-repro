import {componentName, LitElementComponent} from './LitElementComponent';

export default {
    title: `REPRO / ${componentName}`,
    component: componentName,
};

const Template = (args: any) => Object.assign(new LitElementComponent(), args);

export const Primary: any = Template.bind({});
Primary.args = {
    title: 'Click the counter to increment',
    counter: 10,
};
