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
      <section className="relative py-10 md:py-16 px-4 sm:px-6 lg:px-8 isolate">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/illustrations/noise.png')",
            backgroundSize: "cover",
          }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[2fr_4fr] gap-15 items-center">
            <img
              src="/illustrations/kaaba.png"
              alt="Kaaba Illustration"
              className="hidden md:block w-full h-full object-contain"
            />
            <div className="text-[#0D2F2B] text-xl md:text-2xl leading-relaxed">
              <p>
                Every Well we build, Every child we rescue from thirst and
                diseases, Every prayer whispered in gratitude — it begins with
                someone like you who chose to serve.
              </p>
              <p className="mt-6">
                <strong>Al-Rahmah Wells Charity</strong> isn&apos;t just about
                charity. It&apos;s a movement of believers answering a divine
                call to restore dignity and faith in forgotten lands. And now,
                we invite you to become a part of that call.
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
