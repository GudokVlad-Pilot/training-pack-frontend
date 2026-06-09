import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FinAccountSettingCard } from "./FinAccountSettingCard";
import { useState } from "react";

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

const mockData = {
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
    value: null,
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
};

export const Example: Story = {
  args: mockData,
};

export const Interactive: Story = {
  args: mockData,
  render: (args) => {
    const [name, setName] = useState("");
    const [holder, setHolder] = useState("");
    const [sum, setSum] = useState<number | null>(null);

    return (
      <FinAccountSettingCard
        nameField={{
          ...args.nameField,
          value: name,
          onChange: setName,
        }}
        holderField={{
          ...args.holderField,
          value: holder,
          onChange: setHolder,
        }}
        sumField={{
          ...args.sumField,
          value: sum,
          onChange: setSum,
        }}
        deleteButton={args.deleteButton}
        saveButton={args.saveButton}
      />
    );
  },
};
