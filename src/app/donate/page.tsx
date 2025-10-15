import { Metadata } from "next";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate to Al-Rahmah Wells - Help Bring Clean Water to Communities",
  description:
    "Support our mission to provide clean water to communities in need. Your donation helps build wells and water infrastructure that transforms lives.",
  keywords:
    "donate, water wells, charity, clean water, humanitarian aid, water infrastructure, islamic charity, sadaqah",
  openGraph: {
    title: "Donate to Al-Rahmah Wells - Help Bring Clean Water to Communities",
    description:
      "Support our mission to provide clean water to communities in need. Your donation helps build wells and water infrastructure that transforms lives.",
    type: "website",
    url: "https://www.alrahmahwells.org/donate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Al-Rahmah Wells - Help Bring Clean Water to Communities",
    description:
      "Support our mission to provide clean water to communities in need.",
  },
  alternates: {
    canonical: "https://www.alrahmahwells.org/donate",
    languages: {
      en: "https://www.alrahmahwells.org/donate",
      ar: "https://www.alrahmahwells.org/ar/donate",
    },
  },
};

export default function Donate() {
  return <DonatePageClient />;
}
