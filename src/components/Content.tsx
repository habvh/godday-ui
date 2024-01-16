import React from "react";

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function Content({ className, ...props }: ContentProps) {
  return <div className={`${className ?? ""} mx-auto px-[4vw]`} {...props} />;
}
