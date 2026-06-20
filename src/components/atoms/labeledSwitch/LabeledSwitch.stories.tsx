import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LabeledSwitch } from "./LabeledSwitch";
import { useState } from "react";

const meta = {
  title: "Atoms/LabeledSwitch",
  component: LabeledSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: () => alert("Clicked") },
} satisfies Meta<typeof LabeledSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Example",
    checked: false,
  },
};

export const Left: Story = {
  args: {
    label: "Check",
    checked: false,
    labelPosition: "left",
  },
};

export const Right: Story = {
  args: {
    label: "Check",
    checked: false,
    labelPosition: "right",
  },
};

export const Interactive: Story = {
  args: {
    label: "Interactive",
    checked: false,
    labelPosition: "left",
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);

    return (
      <LabeledSwitch
        {...args}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    );
  },
};
