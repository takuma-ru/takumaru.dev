import type { Meta, StoryObj } from "@storybook/react";

import { IndexContainer } from "./IndexContainer";

const meta: Meta<typeof IndexContainer> = {
  title: "components/IndexContainer",
  component: IndexContainer,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
