import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: () => alert("Clicked") },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Button",
  },
};

export const Navigation: Story = {
  args: {
    label: "Home",
  },
};

export const Long: Story = {
  args: {
    label: "A really long button",
  },
};
