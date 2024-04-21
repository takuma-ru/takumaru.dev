import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  title: "components/Section",
  component: Section,
  tags: ["autodocs"],
  args: { title: undefined, content: undefined },
  argTypes: { title: { control: "text" }, content: { control: "text" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
