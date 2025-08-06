import DonateHeroSection from "@/components/donate/DonateHeroSection";
import DonationOptionsSection from "@/components/donate/DonationOptionsSection";

export default function ArabicDonate() {
  return (
    <div className="min-h-screen" dir="rtl">
      <DonateHeroSection />
      <DonationOptionsSection />
      {/* Additional sections will be added here */}
    </div>
  );
}
