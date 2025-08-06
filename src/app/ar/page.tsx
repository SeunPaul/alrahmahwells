import HeroSection from "@/components/home/HeroSection";
import SurvivalStorySection from "@/components/home/SurvivalStorySection";
import MissionSection from "@/components/home/MissionSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import ImpactSection from "@/components/home/ImpactSection";
import RecognitionSection from "@/components/home/RecognitionSection";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function ArabicHome() {
  return (
    <div className="min-h-screen" dir="rtl">
      <HeroSection />
      <SurvivalStorySection />
      <MissionSection />
      <PartnershipSection />
      <ImpactSection />
      <RecognitionSection />
      <ProjectsSection />
    </div>
  );
}
