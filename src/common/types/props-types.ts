import { type ReactNode } from "react";

export type GenericButtonProps = {
  label?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
};
