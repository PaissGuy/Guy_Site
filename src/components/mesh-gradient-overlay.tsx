'use client';

import { MeshGradient } from '@paper-design/shaders-react';
import { useEffect, useState, useMemo, memo } from 'react';

interface MeshGradientOverlayProps {
  className?: string;
  opacity?: number;
  speed?: number;
}

function MeshGradientOverlay({
  className = '',
  opacity = 0.3,
  speed = 0.5
}: MeshGradientOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize colors to prevent recreation on every render
  const colors = useMemo(() => [
    '#DCC2FF', // soft lavender highlight
    '#B8AEF5', // light periwinkle
    '#9CA0E8', // mid periwinkle
    '#A889D3', // muted violet midtone
    '#C78FD6', // rosy amethyst bloom
    '#8A78C6', // deeper periwinkle shadow
  ], []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      <MeshGradient
        colors={colors}
        className="w-full h-full"
        speed={speed}
      />
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(MeshGradientOverlay);
