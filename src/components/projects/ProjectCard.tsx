"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
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
