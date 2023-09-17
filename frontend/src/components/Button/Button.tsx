import React, { ReactNode, ButtonHTMLAttributes } from "react";
import "./button.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const buttonClasses = `btn btn-${variant}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
