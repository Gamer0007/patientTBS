import { Meta} from "@storybook/react";
import StepItem, {StepItemProps} from "../../../../components/molecules/StepItem";

export default {
    title: 'components/molecules/GameItem',
    component:StepItem,
}as Meta;

const Template = (args : StepItemProps) => <StepItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    title:'Super Mechs',
    icon:'step1',
    desc1:'Pilih Salah Satu Game',
    desc2:'yang ingin kamu top up'
};