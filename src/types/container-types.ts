export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean; // Prop para controlar se o container ocupa toda a largura
  noPadding?: boolean; // Prop para remover o padding interno
}

export interface StyledContainerProps {
  $fullWidth?: boolean;
  $noPadding?: boolean;
}