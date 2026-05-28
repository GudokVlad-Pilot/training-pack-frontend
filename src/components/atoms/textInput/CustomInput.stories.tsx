import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CustomInput } from "./CustomInput";

const meta = {
  title: "Atoms/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Custom Input label",
    },
    placeholder: {
      description: "Placeholder",
    },
    type: {
      description: "Input type",
    },
    value: {
      description: "Input value",
    },
    onChange: {
      description: "Value change handler",
    },
  },
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    type: "text",
    label: "Example",
    placeholder: "Placeholder",
    value: "",
    onChange: () => null,
  },
};

export const FilledWithText: Story = {
  args: {
    type: "text",
    label: "Filled with text",
    placeholder: "Placeholder",
    value: "Text here",
    onChange: () => null,
  },
};

export const FilledWithNumber: Story = {
  args: {
    type: "number",
    label: "Filled with number",
    placeholder: "Placeholder",
    value: 10,
    onChange: () => null,
  },
};

export const WithoutLabel: Story = {
  args: {
    type: "text",
    value: "",
    placeholder: "Placeholder",
    onChange: () => null,
  },
};
