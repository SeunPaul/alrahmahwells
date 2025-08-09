"use client";

import VolunteerHero from "@/components/volunteer/VolunteerHero";
import WhyJoinUs from "@/components/volunteer/WhyJoinUs";
import VolunteerForm from "@/components/volunteer/VolunteerForm";
import VersesStrip from "@/components/volunteer/VersesStrip";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-[#f7f9f2]">
      <VolunteerHero />
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/illustrations/mecca.png"
              alt="Kaaba Illustration"
              className="w-full h-full object-contain"
            />
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                Every Well we build, Every child we rescue from thirst and
                diseases, Every prayer whispered in gratitude — it begins with
                someone like you who chose to serve.
              </p>
              <p className="mt-6">
                <strong>Al-Rahmah Wells Foundation</strong> isn&apos;t just
                about charity. It&apos;s a movement of believers answering a
                divine call to restore dignity and faith in forgotten lands. And
                now, we invite you to become a part of that call.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyJoinUs />
      <VolunteerForm />
      <VersesStrip />
      <ProjectsSection />
    </div>
  );
}
