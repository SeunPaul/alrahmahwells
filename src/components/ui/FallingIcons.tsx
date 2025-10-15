"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FallingIcon {
  id: number;
  icon: string;
  alt: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FallingIcons() {
  const [icons, setIcons] = useState<FallingIcon[]>([]);

  const renderSVGIcon = (iconType: string, size: number) => {
    const iconSize = size;
    const color = "#EFDBB3"; // Golden color matching your theme

    switch (iconType) {
      case "moon":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill={color}
              stroke={color}
              strokeWidth="1"
            />
          </svg>
        );
      case "star":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={color}
              stroke={color}
              strokeWidth="1"
            />
          </svg>
        );
      case "mosque":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2l-8 6v14h6v-6h4v6h6V8l-8-6z"
              fill={color}
              stroke={color}
              strokeWidth="1"
            />
            <path d="M12 8v2" stroke={color} strokeWidth="2" />
            <circle cx="12" cy="12" r="1" fill={color} />
          </svg>
        );
      case "prayer":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            <circle cx="12" cy="12" r="2" fill={color} />
          </svg>
        );
      case "dhikr":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="6" cy="12" r="2" fill={color} />
            <circle cx="12" cy="12" r="2" fill={color} />
            <circle cx="18" cy="12" r="2" fill={color} />
            <path d="M6 12h12" stroke={color} strokeWidth="1" />
            <path d="M8 10l8 4M8 14l8-4" stroke={color} strokeWidth="1" />
          </svg>
        );
      case "quran":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="4"
              y="3"
              width="16"
              height="18"
              rx="2"
              fill={color}
              stroke={color}
              strokeWidth="1"
            />
            <path d="M8 8h8M8 12h8M8 16h6" stroke="white" strokeWidth="1" />
            <circle cx="17" cy="7" r="1" fill="white" />
          </svg>
        );
      default:
        return null;
    }
  };

  const iconOptions = [
    { src: "/icons/fall-1.png", alt: "fall-1" },
    { src: "/icons/fall-2.png", alt: "fall-2" },
    { src: "/icons/fall-3.png", alt: "fall-3" },
  ];

  useEffect(() => {
    const createIcon = (id: number): FallingIcon => {
      const iconOption =
        iconOptions[Math.floor(Math.random() * iconOptions.length)];
      return {
        id,
        icon: iconOption.src,
        alt: iconOption.alt,
        x: Math.random() * 100, // Random horizontal position
        y: -100, // Start further above the viewport
        delay: Math.random() * 3, // Random delay before starting (0-3 seconds)
        duration: 6 + Math.random() * 6, // Random fall duration (6-12 seconds)
        size: 25 + Math.random() * 40, // Random size (25-65px) - larger icons
      };
    };

    // Create initial icons - more icons for better visibility
    const initialIcons = Array.from({ length: 40 }, (_, i) => createIcon(i));
    setIcons(initialIcons);

    // Add new icons more frequently
    const interval = setInterval(() => {
      setIcons((prev) => {
        const newIcon = createIcon(Date.now());
        return [...prev.slice(-40), newIcon]; // Keep even more icons on screen
      });
    }, 500); // More frequent creation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-fall"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}px`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
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
