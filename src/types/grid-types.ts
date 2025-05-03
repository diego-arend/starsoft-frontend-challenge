export type GapSize = "sm" | "md" | "lg";

export const gaps = {
  sm: "0.5rem",  // 8px
  md: "1rem",    // 16px
  lg: "2.5rem",  // 40px
};

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  centered?: boolean;
}

export interface RowProps {
  children: React.ReactNode;
  className?: string;
  gap?: GapSize;
}

export interface ColProps {
  children: React.ReactNode;
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  // Novo parâmetro para alinhar os itens dentro da coluna
  align?: 'start' | 'center' | 'end' | 'stretch';
  // Novo parâmetro para justificar os itens dentro da coluna
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  // Novo parâmetro para adicionar padding interno personalizado
  padding?: string;
}

export interface StyledGridContainerProps {
  $maxWidth?: string;
  $centered?: boolean;
}

export interface StyledRowProps {
  gap?: GapSize;
}

export interface StyledColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  $align?: 'start' | 'center' | 'end' | 'stretch';
  $justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  $padding?: string;
}