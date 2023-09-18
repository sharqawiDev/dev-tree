import React, { InputHTMLAttributes, ReactNode } from "react";
import "./input.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  errorMessage,
  ...props
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={props.id}>{label}</label>}
      <div className={`input-group ${errorMessage ? "is-invalid" : ""}`}>
        {icon && <div className="input-icon">{icon}</div>}
        <input className={`form-control`} {...props} />
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Input;
