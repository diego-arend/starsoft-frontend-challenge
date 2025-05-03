export type ObjectFitType = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface ContainerImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
  className?: string;
  objectFit?: ObjectFitType;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}


export interface ImageStylesProps {
  $fill?: boolean;
  $objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  width?: number;
  height?: number;
  src?: string; 
}