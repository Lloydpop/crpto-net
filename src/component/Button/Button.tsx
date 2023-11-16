import React from "react";
import classnames from "classnames";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "primary2"
    | "secondary"
    | "danger"
    | "success"
    | "outline"
    | "black"
    | "transparent";
  disabled?: boolean;
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "button",
    children,
    onClick,
    variant = "primary",
    disabled,
    isFullWidth = false,
  } = props;
  return (
    <button
      className={classnames(
        `flex justify-center rounded-3xl border border-transparent  px-7 text-[15px] items-center font-doppin
           shadow-sm 
          disabled:cursor-not-allowed`,
        {
          "bg-gradient-to-r from-[#7ce8d8] via-[#8570e9] to-[#7ce8d8] text-black disabled:opacity-50 py-3 font-[500]":
            variant === "primary",
          "bg-primary text-white disabled:opacity-50 py-[10px]":
            variant === "primary2",
          "bg-[#e7d1e1] text-primary border-indigo border-2":
            variant === "secondary",
          "bg-red-600 text-white hover:bg-red-500 ": variant === "danger",
          "bg-green-600 text-white hover:bg-green-500": variant === "success",
          "bg-transparent text-white !border-gray-300 hover:bg-gray-50 hover:text-black py-3 font-[500]":
            variant === "outline",
          "bg-gray-700 text-white": variant === "black",
          "bg-transparent !border-0 shadow-none": variant === "transparent",
          "w-full": isFullWidth,
        }
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {disabled ? "..." : children}
    </button>
  );
};
