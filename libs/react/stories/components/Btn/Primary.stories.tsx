import type {Meta, StoryObj} from '@storybook/react'
import Primary from '../../../src/components/Btn/Primary'

const meta: Meta<typeof Primary> = {
    component: Primary,
}

export default meta
type Story = StoryObj<typeof Primary>

export const BtnPrimary: Story = {
    args: {
        label: 'Button Primary',
    },
}