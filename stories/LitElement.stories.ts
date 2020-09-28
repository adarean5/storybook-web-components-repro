import { componentName } from './LitElementComponent';

export default {
    title: `REPRO / ${componentName}`,
    component: componentName,
};

const Template = (args: any) =>
    `<lit-element-component title="${args.title}" counter="${args.counter}"></lit-element-component>`;

export const Primary: any = Template.bind({});
Primary.args = {
    title: 'Click the counter to increment',
    counter: 10,
};
