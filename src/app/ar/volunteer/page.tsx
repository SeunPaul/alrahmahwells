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
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/illustrations/mecca.png"
              alt="رسم للكعبة"
              className="w-full h-full object-contain"
            />
            <div className="text-gray-700 text-lg leading-relaxed">
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
