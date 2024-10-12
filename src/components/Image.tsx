import React from 'react';
import { Image as ChakraImage, ImageProps } from '@chakra-ui/react';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  return (
    <ChakraImage
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;