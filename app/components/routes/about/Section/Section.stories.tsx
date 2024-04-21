import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "components/Section",
  component: Section,
  tags: ["autodocs"],
  args: { titleNode: undefined, children: undefined },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
