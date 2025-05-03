"use client";

import React, { useState } from "react";
import {
  ImageContainer,
  StyledImage,
  Placeholder,
  FallbackImage,
} from "./styles";

interface ContainerImageProps {
  src: string;
  alt: string; 
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * ContainerImage Component
 *
 * A wrapper around Next.js Image component with additional features:
 * - Loading state handling
 * - Error fallback
 * - Optimized for external URLs
 * - Support for different object-fit strategies
 */
const ContainerImage: React.FC<ContainerImageProps> = ({
  src,
  alt = "Imagem do item", 
  width = 500,
  height = 300,
  priority = false,
  fill = false,
  quality = 80,
  className,
  objectFit = "cover",
  fallbackSrc = "/image-placeholder.svg",
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determine if the image is from an external domain
  const isExternal = src.startsWith("http") || src.startsWith("https");

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  return (
    <ImageContainer className={className} $fill={fill} $objectFit={objectFit}>
      {isLoading && <Placeholder />}

      {hasError ? (
        <FallbackImage
          src={fallbackSrc}
          width={width}
          height={height}
          $fill={fill}
          $objectFit={objectFit}
          aria-label={`Imagem não disponível: ${alt}`}
        />
      ) : (
        <StyledImage
          src={src}
          alt={alt} 
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          quality={quality}
          priority={priority}
          onLoad={handleLoad}
          onError={handleError}
          sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${width}px`}
          unoptimized={
            isExternal && !process.env.NEXT_PUBLIC_ENABLE_IMAGE_OPTIMIZATION
          }
          $objectFit={objectFit}
        />
      )}
    </ImageContainer>
  );
};

export default ContainerImage;
