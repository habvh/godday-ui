import React from "react";

enum IconPosition {
  right = "right",
  left = "left",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  positionIcon?: keyof typeof IconPosition;
}

export function Button({
  children,
  icon,
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
    <button className="flex items-center gap-2" {...props}>
      {content}
    </button>
  );
}
