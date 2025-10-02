"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface InteractivePhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const InteractivePhoto: React.FC<InteractivePhotoProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / 10;
      const y = (e.clientY - centerY) / 10;

      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative">
      {/* LED standing glows - positioned on sides */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-b from-white via-gray-300 to-gray-500 rounded-full opacity-70 blur-sm animate-pulse"></div>
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-b from-white via-gray-300 to-gray-500 rounded-full opacity-70 blur-sm animate-pulse"></div>

      {/* Additional side light streaks */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-2 h-40 bg-white/40 rounded-full blur-lg"></div>
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-2 h-40 bg-white/40 rounded-full blur-lg"></div>

      {/* Container that follows mouse */}
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden shadow-xl cursor-none transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
};

export default InteractivePhoto;
