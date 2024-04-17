import type { Meta, StoryObj } from "@storybook/react";

import { CommonLayout } from "./CommonLayout";

const meta: Meta<typeof CommonLayout> = {
  title: "components/CommonLayout",
  component: CommonLayout,
  tags: ["autodocs"],
  args: { isHeader: undefined, isFooter: undefined, children: undefined },
  argTypes: {
    isHeader: { control: "boolean" },
    isFooter: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
