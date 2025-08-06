import { createTranslator, createFormatter } from "next-intl";
import { defaultLocale, locales } from "./config";

// Simple locale detection
export function getLocale(): string {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const locale = segments[1];

    if (locales.includes(locale as any)) {
      return locale;
    }
  }

  return defaultLocale;
}

// Server-safe locale detection
export function getLocaleFromRequest(): string {
  return defaultLocale;
}

// Simple translation function
export function useTranslations() {
  // Use pathname-based locale detection for consistency
  const locale = typeof window === "undefined" ? defaultLocale : getLocale();

  return function t(key: string): string {
    // Simple translation mapping
    const translations: Record<string, Record<string, string>> = {
      en: {
        "navigation.home": "Home",
        "navigation.aboutUs": "About Us",
        "navigation.volunteer": "Volunteer",
        "navigation.contactUs": "Contact Us",
        "navigation.blog": "Blog",
        "navigation.ourProjects": "Our Projects",
        "navigation.ourImpact": "See our Impact",
        "navigation.donate": "Donate Now",
        "home.hero.title": "Al-Rahmah Wells",
        "home.hero.subtitle": "Bringing Clean Water to Communities in Need",
        "home.hero.description":
          "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
      },
      ar: {
        "navigation.home": "الرئيسية",
        "navigation.aboutUs": "من نحن",
        "navigation.volunteer": "تطوع",
        "navigation.contactUs": "اتصل بنا",
        "navigation.blog": "المدونة",
        "navigation.ourProjects": "مشاريعنا",
        "navigation.ourImpact": "شاهد تأثيرنا",
        "navigation.donate": "تبرع الآن",
        "home.hero.title": "آبار الرحمة",
        "home.hero.subtitle": "نحمل المياه النظيفة للمجتمعات المحتاجة",
        "home.hero.description":
          "نحن متخصصون في توفير وصول مستدام للمياه النظيفة من خلال بناء الآبار ومشاريع البنية التحتية للمياه.",
      },
    };

    return translations[locale]?.[key] || key;
  };
}

export function useLocale(): string {
  // During SSR, return default locale to prevent hydration mismatch
  if (typeof window === "undefined") {
    return defaultLocale;
  }
  return getLocale();
}

export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const locale = segments[1];

  if (locales.includes(locale as any)) {
    return locale;
  }

  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const locale = segments[1];

  if (locales.includes(locale as any)) {
    return "/" + segments.slice(2).join("/");
  }

  return pathname;
}
