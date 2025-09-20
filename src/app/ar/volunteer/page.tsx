"use client";

import VolunteerHero from "@/components/volunteer/VolunteerHero";
import WhyJoinUs from "@/components/volunteer/WhyJoinUs";
import VolunteerForm from "@/components/volunteer/VolunteerForm";
import VersesStrip from "@/components/volunteer/VersesStrip";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function ArabicVolunteer() {
  return (
    <div className="min-h-screen bg-[#f7f9f2]" dir="rtl">
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
                كل بئرٍ نبنيه، وكل طفلٍ ننقذه من العطش والمرض، وكل دعاء شكرٍ
                يهمس — يبدأ بشخصٍ مثلك اختار أن يخدم.
              </p>
              <p className="mt-6">
                <strong>مؤسسة آبار الرحمة</strong> ليست مجرد عملٍ خيري؛ إنها
                حركة من المؤمنين يلبّون نداءً إلهياً لاستعادة الكرامة والإيمان
                في الأراضي المنسية. والآن ندعوك لتكون جزءاً من ذلك النداء.
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
