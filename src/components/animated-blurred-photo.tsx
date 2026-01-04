'use client';

import MeshGradientOverlay from './mesh-gradient-overlay';

interface AnimatedBlurredPhotoProps {
  src: string;
  alt: string;
  size?: number; // Size in pixels
}

export default function AnimatedBlurredPhoto({
  src,
  alt,
  size = 160 // Default to 160px (medium size)
}: AnimatedBlurredPhotoProps) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Container for photo and mesh */}
      <div
        className="rounded-full overflow-hidden border-2 border-sage-400/50 shadow-xl relative w-full h-full"
      >
        {/* Clear photo - no blur */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />

        {/* Optimized mesh gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          <MeshGradientOverlay opacity={0.7} speed={0.7} />
        </div>
      </div>
    </div>
  );
}
