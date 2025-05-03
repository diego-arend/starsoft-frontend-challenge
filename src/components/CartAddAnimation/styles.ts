import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.darkest}E6`}; // Usando a cor darkest com opacidade
  border-radius: ${({ theme }) => theme.borders.radius};
  z-index: ${({ theme }) => theme.zIndices.modal};
`;

interface AnimationIconContainerProps {
  $isNewItem: boolean;
}

export const AnimationIconContainer = styled(motion.div)<AnimationIconContainerProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ $isNewItem, theme }) => 
    $isNewItem 
      ? theme.colors.primary 
      : theme.colors.primaryHover}; // Usando primaryHover como alternativa
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const AnimationText = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  max-width: 80%;
`;