import React from "react";

enum IconPosition {
  right = "right",
  left = "left",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  positionIcon?: keyof typeof IconPosition;
  isDefaultStyle?: boolean;
}

export function Button({
  children,
  icon,
  isDefaultStyle = true,
  positionIcon = "right",
  ...props
}: ButtonProps) {
  const content: React.ReactNode =
    positionIcon === "right" ? (
      <>
        {children}
        {icon}
      </>
    ) : (
      <>
        {icon}
        {children}
      </>
    );
  return (
    <button
      className={`${
        isDefaultStyle
          ? "py-2 md:py-4 px-8 md:px-14 bg-go-black text-go-white rounded-lg"
          : ""
      } flex items-center justify-center gap-2`}
      {...props}
    >
      {content}
    </button>
  );
}
