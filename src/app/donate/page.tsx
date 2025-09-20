import DonateHeroSection from "@/components/donate/DonateHeroSection";
import DonationOptionsSection from "@/components/donate/DonationOptionsSection";
import DonateStatsSection from "@/components/donate/DonateStatsSection";
import DonateProjectsSection from "@/components/donate/DonateProjectsSection";

export default function Donate() {
  return (
    <div className="min-h-screen">
      <DonateHeroSection />
      <DonationOptionsSection />
      <DonateStatsSection />
      <DonateProjectsSection />
      {/* Additional sections will be added here */}
    </div>
  );
}
