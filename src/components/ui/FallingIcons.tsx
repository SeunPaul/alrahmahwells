"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FloatingIcon {
  id: number;
  icon: string;
  alt: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  size: number;
}

export default function FallingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const iconOptions = [
    { src: "/icons/fall-1.png", alt: "fall-1" },
    { src: "/icons/fall-2.png", alt: "fall-2" },
    { src: "/icons/fall-3.png", alt: "fall-3" },
  ];

  useEffect(() => {
    // Helper function to get a random edge point
    const getRandomEdgePoint = () => {
      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      switch (edge) {
        case 0: // top
          return { x: Math.random() * 100, y: 0 };
        case 1: // right
          return { x: 100, y: Math.random() * 100 };
        case 2: // bottom
          return { x: Math.random() * 100, y: 100 };
        case 3: // left
          return { x: 0, y: Math.random() * 100 };
        default:
          return { x: 50, y: 50 };
      }
    };

    const createIcon = (id: number): FloatingIcon => {
      const iconOption =
        iconOptions[Math.floor(Math.random() * iconOptions.length)];
      const start = {
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      const end = getRandomEdgePoint();

      return {
        id,
        icon: iconOption.src,
        alt: iconOption.alt,
        startX: start.x,
        startY: start.y,
        endX: end.x,
        endY: end.y,
        duration: 16,
        delay: Math.random() * 3, // Random delay between 0-3 seconds
        size: 25,
      };
    };

    // Initialize icons
    const initialIcons = Array.from({ length: 50 }, (_, i) => createIcon(i));
    setIcons(initialIcons);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        ${icons
          .map(
            (icon) => `
          @keyframes float-${icon.id} {
            0% {
              left: ${icon.startX}%;
              top: ${icon.startY}%;
            }
            100% {
              left: ${icon.endX}%;
              top: ${icon.endY}%;
            }
          }
        `
          )
          .join("\n")}
      `}</style>
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.startX}%`,
            top: `${icon.startY}%`,
            transform: "translate(-50%, -50%)",
            animation: `float-${icon.id} ${icon.duration}s linear ${icon.delay}s infinite alternate`,
          }}
        >
          <Image
            src={icon.icon}
            alt={icon.alt}
            width={icon.size}
            height={icon.size}
            className="opacity-60 hover:opacity-80 transition-opacity duration-300"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(239, 219, 179, 0.6)) brightness(1.2)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
