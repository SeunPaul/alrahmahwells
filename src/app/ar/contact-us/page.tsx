import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MercyMovementSection from "@/components/contact/MercyMovementSection";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function ArabicContactUs() {
  return (
    <div className="min-h-screen" dir="rtl">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <MercyMovementSection />
      <ProjectsSection />
    </div>
  );
}
