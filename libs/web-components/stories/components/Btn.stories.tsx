import { html } from 'lit';
import '../../src/components/Btn/Primary';
import type { Meta, StoryObj } from '@storybook/web-components';

// Define los argumentos esperados para el componente
type BtnArgs = {
  label: string;
}

const meta: Meta<BtnArgs> = {
  title: 'Components/Button',
  component: 'custom-button',
  argTypes: {
    label: { control: 'text' },
  },
  render: (args) => html`<custom-button label="${args.label}"></custom-button>`, 
}

export default meta;
type Story = StoryObj<BtnArgs>

export const Primary: Story = {
  args: {
    label: 'Button',
  },
}

