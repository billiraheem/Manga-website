"use client";
import { Button, IconButton } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";

interface CustomButtonProps {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | "inherit";
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  children?: ReactNode;
  isIconButton?: boolean;
  disabled?: boolean;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  label,
  onClick,
  icon,
  children,
  href,
  isIconButton = false,
  disabled = false,
}) => {
  if (href) {
    return isIconButton ? (
      <IconButton component={Link} href={href} color={color}>
        {icon}
      </IconButton>
    ) : (
      <Button component={Link} href={href} color={color}>
        {children || label}
      </Button>
    );
  }

  return isIconButton ? (
    <IconButton onClick={onClick} color={color} disabled={disabled}>
      {icon}
    </IconButton>
  ) : (
    <Button onClick={onClick} variant={variant} color={color} size={size} disabled={disabled}>
      {icon} {children || label}
    </Button>
  );
};

export default CustomButton;