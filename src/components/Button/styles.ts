import { StyledButtonProps } from "@/types/button-types";
import styled, { css } from "styled-components";

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radius};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};

  /* Configurable dimensions */
  width: ${({ $width, $fullWidth }) =>
    $fullWidth ? "100%" : $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  /* Style variants */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "secondary":
        return css`
          background-color: ${theme.colors.gray};
          color: ${theme.colors.white};

          &:hover {
            background-color: #454545;
          }

          &:active {
            background-color: #2d2d2d;
          }
        `;
      case "primary":
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.primaryHover};
          }

          &:active {
            background-color: ${theme.colors.primaryActive};
          }
        `;
    }
  }}
`;
