import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "components/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: { direction: undefined },
  argTypes: {
    direction: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
