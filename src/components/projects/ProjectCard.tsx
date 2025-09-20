"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right" | "top";
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}: ProjectCardProps) {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  // Handle horizontal card layout (image on top)
  if (imagePosition === "top") {
    return (
      <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Image Section */}
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-48 object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Handle legacy left/right layout for backward compatibility
  const isImageLeft = imagePosition === "left";
  const isRTLImageLeft = isRTL ? !isImageLeft : isImageLeft;

  return (
    <div className="bg-[#F4FAEE] rounded-2xl border border-[#D6E0CB] overflow-hidden mb-8">
      <div
        className={`grid gap-8 items-center p-8 ${
          isRTLImageLeft ? "md:grid-cols-[2fr_4fr]" : "md:grid-cols-[4fr_2fr]"
        }`}
      >
        {isRTLImageLeft && (
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-56 md:h-64 object-cover rounded-lg"
            />
          </div>
        )}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
            {title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
        {!isRTLImageLeft && (
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-56 md:h-64 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
