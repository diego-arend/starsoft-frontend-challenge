"use client";

import React from "react";
import { ProgressBarContainer, ProgressBarFill } from "./styles";
import { ProgressBarProps } from "@/types/progressbar-types";

/**
 * ProgressBar Component
 *
 * Displays a progress bar with customizable fill percentage
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  // Garantir que o progresso esteja entre 0 e 100
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <ProgressBarContainer className={className}>
      <ProgressBarFill style={{ width: `${safeProgress}%` }} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
