import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import '../../../app/styles/index.scss';
import { Dark } from 'pages/AboutePage/ui/AboutePage.stories';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is the content of the modal',
    isOpen: true
  }
};

export const LongContent: Story = {
  args: {
    children: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
      euismod aliquam nunc nisi vel nunc. Nullam euismod, nisi vel
      consectetur interdum, nisl nunc egestas nunc, euismod aliquam
      nunc nisi vel nunc.
    `,
    isOpen: true
  }
};

export const LongContentDark: Story = {
  args: {
    children: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
      euismod aliquam nunc nisi vel nunc. Nullam euismod, nisi vel
      consectetur interdum, nisl nunc egestas nunc, euismod aliquam
      nunc nisi vel nunc.
    `,
    isOpen: true
  }
};

LongContentDark.decorators = [ThemeDecorator(Theme.DARK)];

// const ModalWithHook = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         This is a modal that can be opened and closed.
//       </Modal>
//     </>
//   );
// };

// export const Openable: Story = {
//   render: () => <ModalWithHook />
// };

// export const Closed: Story = {
//   args: {
//     children: 'This modal is closed by default',
//     isOpen: false
//   }
// };
