import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import '../../../app/styles/index.scss';

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      'export default {\n' +
      "    title: 'shared/Code',\n" +
      '    component: Code,\n' +
      '    argTypes: {\n' +
      "        backgroundColor: { control: 'color' },\n" +
      '    },\n' +
      '} as ComponentMeta<typeof Code>;\n' +
      '\n' +
      'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
      '\n' +
      'export const Normal = Template.bind({});'
  }
};
