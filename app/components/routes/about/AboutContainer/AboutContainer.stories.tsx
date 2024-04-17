import type { Meta, StoryObj } from "@storybook/react";

import { AboutContainer } from "./AboutContainer";

const meta: Meta<typeof AboutContainer> = {
  title: "components/AboutContainer",
  component: AboutContainer,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
