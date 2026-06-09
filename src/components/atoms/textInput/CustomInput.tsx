import "./customInput.css";

export interface BaseCustomInputProps {
  /** Custom Input label */
  label?: string;
  /** Placeholder */
  placeholder?: string;
}

interface TextInputProps extends BaseCustomInputProps {
  /** Input type */
  type: "text";
  /** Input value */
  value: string;
  /** Value change handler */
  onChange: (value: string) => void;
}

interface NumberInputProps extends BaseCustomInputProps {
  /** Input type */
  type: "number";
  /** Input value */
  value: number | null;
  /** Value change handler */
  onChange: (value: number | null) => void;
}

export type CustomInputProps = TextInputProps | NumberInputProps;

export const CustomInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="gudokCustomInputBox">
      <div className="gudokCustomInputLabel">{label}</div>
      <input
        className="gudokCustomInputField"
        type={type}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => {
          if (type === "number") {
            onChange(e.target.value === "" ? null : Number(e.target.value));
          } else {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
};
