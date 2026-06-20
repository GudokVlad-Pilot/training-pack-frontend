import "./labeledSwitch.css";

export interface LabeledSwitchProps {
  /** Label text */
  label?: string;
  /** Check flag */
  checked: boolean;
  /** Label position */
  labelPosition?: "left" | "right";
  /** Optional disable option */
  disabled?: boolean;
  /** Optional click handler */
  onChange?: () => void;
}

export const LabeledSwitch = ({
  label,
  checked,
  disabled,
  labelPosition = "left",
  ...props
}: LabeledSwitchProps) => {
  return (
    <div className="gudokLabeledSwitchWrapper">
      {labelPosition === "left" && (
        <div className="gudokLabeledSliderLabel">{label}</div>
      )}
      <label className="gudokLabeledSwitchBox">
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <span className="gudokLabeledSwitchSlider"></span>
      </label>
      {labelPosition === "right" && (
        <div className="gudokLabeledSliderLabel">{label}</div>
      )}
    </div>
  );
};
