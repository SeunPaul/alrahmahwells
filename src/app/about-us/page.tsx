import AboutHeroSection from "@/components/about/AboutHeroSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import VisionSection from "@/components/about/VisionSection";
import FaithSection from "@/components/about/FaithSection";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <WhoWeAreSection />
      <VisionSection />
      <FaithSection />
      <ProjectsSection />
      {/* Additional sections will be added here */}
    </div>
  );
}
