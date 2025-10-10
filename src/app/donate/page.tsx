"use client";

import { useState } from "react";
import DonateHeroSection from "@/components/donate/DonateHeroSection";
import DonationOptionsSection from "@/components/donate/DonationOptionsSection";
import DonateStatsSection from "@/components/donate/DonateStatsSection";
import DonateProjectsSection from "@/components/donate/DonateProjectsSection";
import DonateCryptoSection from "@/components/donate/DonateCryptoSection";
import DonateCryptoGuideSection from "@/components/donate/DonateCryptoGuideSection";
import DonateFAQSection from "@/components/donate/DonateFAQSection";
import DonateImpactSection from "@/components/donate/DonateImpactSection";
import DonateHelpSection from "@/components/donate/DonateHelpSection";
import CryptoDonationForm from "@/components/donate/CryptoDonationForm";

export default function Donate() {
  const [showCryptoForm, setShowCryptoForm] = useState(false);
  const [cryptoFormAmount, setCryptoFormAmount] = useState<
    number | undefined
  >();

  const handleDonationClick = (amount: number | string) => {
    if (typeof amount === "number") {
      setCryptoFormAmount(amount);
    } else {
      // For custom donation, don't pre-fill amount
      setCryptoFormAmount(undefined);
    }
    setShowCryptoForm(true);
  };
  return (
    <div className="min-h-screen">
      <DonateHeroSection />
      <DonateProjectsSection onDonateClick={handleDonationClick} />
      <DonateStatsSection />
      <DonationOptionsSection onDonateClick={handleDonationClick} />
      <DonateCryptoSection
        onDonateClick={() => {
          setCryptoFormAmount(undefined); // No pre-filled amount for crypto section button
          setShowCryptoForm(true);
        }}
      />
      <DonateCryptoGuideSection />
      <DonateHelpSection />
      <DonateFAQSection />
      <DonateImpactSection />

      {/* Global Crypto Donation Form Modal */}
      {showCryptoForm && (
        <CryptoDonationForm
          onClose={() => {
            setShowCryptoForm(false);
            setCryptoFormAmount(undefined);
          }}
          initialAmount={cryptoFormAmount}
        />
      )}
    </div>
  );
}
