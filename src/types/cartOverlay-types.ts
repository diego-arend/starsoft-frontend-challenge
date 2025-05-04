export interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface OverlayProps {
  $isOpen: boolean; // Alterado para usar o prefixo $
}
