import DonateHeroSection from "@/components/donate/DonateHeroSection";
import DonationOptionsSection from "@/components/donate/DonationOptionsSection";
import DonateStatsSection from "@/components/donate/DonateStatsSection";
import DonateProjectsSection from "@/components/donate/DonateProjectsSection";
import DonateCryptoSection from "@/components/donate/DonateCryptoSection";
import DonateCryptoGuideSection from "@/components/donate/DonateCryptoGuideSection";
import DonateFAQSection from "@/components/donate/DonateFAQSection";
import DonateImpactSection from "@/components/donate/DonateImpactSection";
import DonateHelpSection from "@/components/donate/DonateHelpSection";

export default function ArabicDonate() {
  return (
    <div className="min-h-screen" dir="rtl">
      <DonateHeroSection />
      <DonationOptionsSection />
      <DonateStatsSection />
      <DonateProjectsSection />
      <DonateCryptoSection />
      <DonateCryptoGuideSection />
      <DonateHelpSection />
      <DonateFAQSection />
      <DonateImpactSection />
    </div>
  );
}
