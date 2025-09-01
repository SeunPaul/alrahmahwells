import type { Metadata } from "next";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/providers/AOSProvider";

import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "Al-Rahmah Wells - Bringing Clean Water to Communities",
  description:
    "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
  keywords:
    "water wells, clean water, charity, humanitarian aid, water infrastructure",
  authors: [{ name: "Al-Rahmah Wells" }],
  openGraph: {
    title: "Al-Rahmah Wells - Bringing Clean Water to Communities",
    description:
      "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Rahmah Wells - Bringing Clean Water to Communities",
    description:
      "We are dedicated to providing sustainable access to clean water through well construction and water infrastructure projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gilroy.className} antialiased`}
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
