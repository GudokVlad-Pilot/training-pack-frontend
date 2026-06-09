import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FinAccountSettingCard } from "./FinAccountSettingCard";

const meta = {
  title: "Molecules/FinAccountSettingCard",
  component: FinAccountSettingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FinAccountSettingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nameField: {
      label: "Account Name",
      placeholder: "National Bank Account",
      value: "",
      onChange: () => null,
    },
    holderField: {
      label: "Account Holder",
      placeholder: "John Doe",
      value: "",
      onChange: () => null,
    },
    sumField: {
      label: "Sum",
      placeholder: "1234.56",
      value: 0,
      onChange: () => null,
    },
    deleteButton: {
      label: "Delete",
      onClick: () => alert("Deleted"),
    },
    saveButton: {
      label: "Save",
      onClick: () => alert("Saved"),
    },
  },
};
