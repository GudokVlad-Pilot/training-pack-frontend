import {
  CustomInput,
  CustomInputProps,
} from "@/components/atoms/textInput/CustomInput";
import "./finAccountSettingCard.css";
import { Button, ButtonProps } from "@/components/atoms/button/Button";
import {
  LabeledSwitch,
  LabeledSwitchProps,
} from "@/components/atoms/labeledSwitch/LabeledSwitch";

type TextInputProps = Extract<CustomInputProps, { type: "text" }>;
type NumberInputProps = Extract<CustomInputProps, { type: "number" }>;

export interface FinAccountSettingCardProps {
  /** Account Name Input Field*/
  nameField: Omit<TextInputProps, "type">;
  /** Account Holder Input Field*/
  holderField: Omit<TextInputProps, "type">;
  /** Account Sum Input Field*/
  sumField: Omit<NumberInputProps, "type">;
  /** Account Delete Button*/
  deleteButton: ButtonProps;
  /** Account Save Button*/
  saveButton: ButtonProps;
  /** Account Activation Switch*/
  activeSwitch: LabeledSwitchProps;
}

export const FinAccountSettingCard = ({
  nameField,
  holderField,
  sumField,
  deleteButton,
  saveButton,
  activeSwitch,
}: FinAccountSettingCardProps) => {
  return (
    <div className="gudokFinAccountSettingCardWrapper">
      <div className="gudokFinAccountSettingCardTopBox">
        <div>Financial Account</div>
        <Button {...deleteButton} />
      </div>
      <div className="gudokFinAccountSettingCardInputFieldsBox">
        <CustomInput type="text" {...nameField} />
        <CustomInput type="text" {...holderField} />
        <CustomInput type="number" {...sumField} />
      </div>
      <div className="gudokFinAccountSettingCardBottomBox">
        <LabeledSwitch {...activeSwitch} />
        <Button {...saveButton} />
      </div>
    </div>
  );
};
