import type { Metadata } from "next";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/providers/AOSProvider";

import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al-Rahmah Wells - Bringing Clean Water to Communities",
    template: "%s | Al-Rahmah Wells",
  },
  description:
    "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects. Support our mission to transform lives with clean water.",
  keywords:
    "water wells, clean water, charity, humanitarian aid, water infrastructure, islamic charity, sadaqah, well construction, community development",
  authors: [{ name: "Al-Rahmah Wells" }],
  creator: "Al-Rahmah Wells",
  publisher: "Al-Rahmah Wells",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Al-Rahmah Wells - Bringing Clean Water to Communities",
    description:
      "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
    type: "website",
    locale: "en_US",
    url: "https://www.alrahmahwells.org",
    siteName: "Al-Rahmah Wells",
    images: [
      {
        url: "https://www.alrahmahwells.org/images/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Rahmah Wells - Clean Water for Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Rahmah Wells - Bringing Clean Water to Communities",
    description:
      "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
    images: ["https://www.alrahmahwells.org/images/home-hero.jpg"],
  },
  alternates: {
    canonical: "https://www.alrahmahwells.org",
    languages: {
      en: "https://www.alrahmahwells.org",
      ar: "https://www.alrahmahwells.org/ar",
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Al-Rahmah Wells",
              url: "https://www.alrahmahwells.org",
              logo: "https://www.alrahmahwells.org/logos/logo.png",
              description:
                "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              sameAs: [
                // Add your social media URLs here
                // "https://facebook.com/alrahmahwells",
                // "https://twitter.com/alrahmahwells",
                // "https://instagram.com/alrahmahwells"
              ],
              potentialAction: {
                "@type": "DonateAction",
                target: "https://www.alrahmahwells.org/donate",
                recipient: {
                  "@type": "Organization",
                  name: "Al-Rahmah Wells",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${gilroy.className} ${playfairDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        <AOSProvider>
          <FloatingNav />
          <main>{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
