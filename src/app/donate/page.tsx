import DonateHeroSection from "@/components/donate/DonateHeroSection";
import DonationOptionsSection from "@/components/donate/DonationOptionsSection";

export default function Donate() {
  return (
    <div className="min-h-screen">
      <DonateHeroSection />
      <DonationOptionsSection />
      {/* Additional sections will be added here */}
    </div>
  );
}
