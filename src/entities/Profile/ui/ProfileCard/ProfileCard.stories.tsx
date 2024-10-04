import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      first: 'John',
      lastname: 'Doe',
      age: 30,
      city: 'New York',
      username: 'johndoe',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      currency: Currency.USD,
      country: Country.Ukraine
    }
  }
};

export const WithError: Story = {
  args: {
    error: 'true'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};
