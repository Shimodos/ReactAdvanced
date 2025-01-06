import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Raw: Story = {
  args: {
    children: (
      <>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </>
    )
  }
};

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
    children: (
      <>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </>
    )
  }
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </>
    )
  }
};

export const Gap: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </>
    )
  }
};
