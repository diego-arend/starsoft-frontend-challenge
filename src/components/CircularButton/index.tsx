"use client";

import React from "react";
import { StyledCircularButton } from "./styles";
import { useTheme } from "styled-components";
import { CircularButtonProps } from "@/types/circularButton-types";

/**
 * Circular button that can contain icons
 *
 */
const CircularButton: React.FC<CircularButtonProps> = ({
  onClick,
  icon,
  size = "medium",
  ariaLabel,
}) => {
  const theme = useTheme();

  return (
    <StyledCircularButton
      onClick={onClick}
      $backgroundColor={theme.colors.primary}
      $size={size}
      aria-label={ariaLabel || "Circular button"}
      type="button"
    >
      {icon}
    </StyledCircularButton>
  );
};

export default CircularButton;
