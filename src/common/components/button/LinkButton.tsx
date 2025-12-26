import { Link } from "react-router";
import type { GenericButtonProps } from "../../types/props-types";
import Button from "./Button";

type LinkButtonProps = GenericButtonProps & {
  href: string;
};

const LinkButton = ({
  label,
  icon,
  variant = "primary",
  href,
  className = "",
}: LinkButtonProps) => {
  return (
    <Link to={href}>
      <Button
        label={label}
        icon={icon}
        variant={variant}
        className={className}
      />
    </Link>
  );
};

export default LinkButton;
