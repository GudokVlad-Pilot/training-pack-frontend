import "./button.css";

export interface ButtonProps {
  /** Button text */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button className="gudokButtonBox" {...props}>
      <div className="gudokButtonLabel">{label}</div>
    </button>
  );
};
