import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from '@/shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'page/ProfilePage',
  component: ProfilePage,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

Light.decorators = [
  StoreDecorator(
    {
      profile: {
        form: {
          first: 'John',
          lastname: 'Doe',
          age: 30,
          city: 'New York',
          username: 'johndoe',
          avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          // currency: Currency.USD,
          // country: Country.Ukraine
        }
      }
    },
    {}
  )
];

export const Dark: Story = {
  args: {}
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator(
    {
      profile: {
        form: {
          first: 'John',
          lastname: 'Doe',
          age: 30,
          city: 'New York',
          username: 'johndoe',
          avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          // currency: Currency.USD,
          // country: Country.Ukraine
        }
      }
    },
    {}
  )
];
