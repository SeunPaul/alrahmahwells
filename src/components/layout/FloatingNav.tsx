"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, getLocaleFromPathname } from "@/i18n/utils";
import { locales, rtlLocales, type Locale } from "@/i18n/config";
import { ASSETS } from "@/constants/assets";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".language-switcher")) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  const switchLanguage = (newLocale: string) => {
    const currentPath = pathname;
    let pathWithoutLocale = currentPath;
    if (locale !== "en" && currentPath.startsWith(`/${locale}`)) {
      pathWithoutLocale = currentPath.replace(`/${locale}`, "") || "/";
    }
    const newPath =
      newLocale === "en"
        ? pathWithoutLocale
        : `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  const getLocalizedPath = (path: string) => {
    const currentLocale = getLocaleFromPathname(pathname);
    if (currentLocale === "en") return path;
    return `/${currentLocale}${path}`;
  };

  const navLinks = [
    {
      href: "/about-us",
      label: t("navigation.aboutUs"),
    },
    {
      href: "/volunteer",
      label: t("navigation.volunteer"),
    },
    {
      href: "/contact-us",
      label: t("navigation.contactUs"),
    },
    { href: "/blog", label: t("navigation.blog") },
    {
      href: "/our-projects",
      label: t("navigation.ourProjects"),
    },
  ];

  const getCurrentLanguageDisplay = () => {
    const currentLocale = getLocaleFromPathname(pathname);
    return currentLocale === "en" ? "Eng" : "العربية";
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[56px] shadow-lg border border-white/20 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center gap-6">
            {/* Logo */}
            <Link
              href={getLocalizedPath("/") as any}
              className="flex items-center lg:w-84"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src={ASSETS.LOGOS.PRIMARY}
                  alt={locale === "ar" ? "آبار الرحمة" : "Al-Rahmah Wells"}
                  className="w-13 h-13"
                />
                <div className="sm:text-xl font-bold text-primary-dark leading-5 text-nowrap">
                  {locale === "ar" ? "آبار الرحمة" : "Al-Rahmah Wells"}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {/* Navigation Links */}
            <div
              className="hidden lg:flex items-center gap-6 overflow-x-scroll scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedPath(link.href) as any}
                  className="text-primary-light font-semibold whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="items-center gap-4 hidden md:flex">
                <Link
                  href={
                    getLocalizedPath(
                      "/our-impact/i-watched-a-7-year-old-helplessly-drink-from-a-swamp"
                    ) as any
                  }
                  className="px-4 py-2 bg-primary-light text-sm text-white rounded-3xl hover:bg-primary-dark transition-colors font-bold whitespace-nowrap"
                >
                  {t("navigation.ourImpact")}
                </Link>
                <Link
                  href={getLocalizedPath("/donate") as any}
                  className="px-4 py-2 bg-secondary-light text-sm text-white rounded-3xl hover:bg-secondary-dark transition-colors font-bold whitespace-nowrap"
                >
                  {t("navigation.donate")}
                </Link>
              </div>

              {/* Language Switcher */}
              <div
                className={`relative language-switcher border-gray-400 ${
                  locale === "ar" ? "pr-3 border-r" : "pl-3 border-l"
                }`}
              >
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-primary-dark hover:text-primary-light transition-colors cursor-pointer"
                >
                  <HiOutlineGlobeAlt className="w-5 h-5 text-primary-light" />
                  <span className="font-semibold hidden sm:inline-block text-primary-dark">
                    {getCurrentLanguageDisplay()}
                  </span>
                  <IoChevronDown
                    className={`w-4 h-4 transition-transform text-primary-dark ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {locales.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          switchLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        {localeNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-primary-dark cursor-pointer"
                >
                  {isMobileMenuOpen ? (
                    <IoClose className="w-6 h-6" />
                  ) : (
                    <TbMenu3 className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 mt-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getLocalizedPath(link.href) as any}
                    className="text-primary-light transition-colors font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link
                    href={
                      getLocalizedPath(
                        "/our-impact/i-watched-a-7-year-old-helplessly-drink-from-a-swamp"
                      ) as any
                    }
                    className="px-4 py-2 bg-primary-light text-white rounded-3xl hover:bg-primary-dark transition-colors font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navigation.ourImpact")}
                  </Link>
                  <Link
                    href={getLocalizedPath("/donate") as any}
                    className="px-4 py-2 bg-secondary-light text-white rounded-3xl hover:bg-secondary-dark transition-colors font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navigation.donate")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

const localeNames: Record<string, string> = {
  en: "English",
  ar: "العربية",
};
