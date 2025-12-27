import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { GenericButtonProps } from "../../types/props-types";

type ButtonProps = GenericButtonProps & { onClick?: () => void };

const Button = ({
  label,
  icon,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "font-display text-body-display px-6 py-3 rounded-lg transition-colors duration-150 cursor-pointer",
        clsx(
          variant === "primary" &&
            "bg-primary text-black-100 hover:bg-primary-hover active:bg-primary-active",
          variant === "secondary" &&
            "px-5.5 py-2.5 border-2 border-primary text-primary hover:border-primary-hover hover:text-primary-hover hover:bg-white-05 active:border-primary-active active:text-primary-active active:bg-white-10",
          variant === "transparent" &&
            "text-primary hover:text-primary-hover hover:bg-white-05 active:text-primary-active active:bg-white-10"
        ),
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </div>
    </button>
  );
};

export default Button;
