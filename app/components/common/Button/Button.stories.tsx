import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: { fontFamily: undefined, link: undefined, children: undefined },
  argTypes: {
    fontFamily: { control: "select", options: ["chillax", "satoshi"] },
    children: {
      control: "select",
      options: [
        "string",
        "number",
        "false",
        "true",
        "React.ReactElement<any, string | React.JSXElementConstructor<any>>",
        "Iterable<React.ReactNode>",
        "React.ReactPortal",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Button" },
};

export const LinkButton: Story = {
  args: { children: "Button", link: { to: "https://takumaru.dev" } },
};
