"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function VolunteerHero() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="pt-40 pb-10 px-4 sm:px-6 lg:px-8 relative isolate"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-15 items-start">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-light">
              {locale === "ar" ? (
                <>
                  امنح وقتك. غيّر حياة.{" "}
                  <span className="text-primary-light">اكسب أجراً دائماً.</span>
                </>
              ) : (
                <>
                  Give Your Time. Change a Life.{" "}
                  <span className="text-secondary-light">
                    Earn Eternal Rewards.
                  </span>
                </>
              )}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#0D2F2B] max-w-xl font-medium">
              {locale === "ar"
                ? "انضم إلى قضية موثقة شرعياً وكن إجابةً لدعاء أحدهم."
                : "Join a halal-certified cause and become the answer to someone's dua."}
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="text-[#0D2F2B] leading-relaxed font-medium text-lg md:text-xl italic"
          >
            <p className="">
              {locale === "ar"
                ? "من نفّس عن مؤمن كربة من كرب الدنيا نفّس الله عنه كربة من كرب يوم القيامة."
                : "Whoever removes hardship for a believer in this world, Allah will remove hardship for him on the Day of Judgment."}
            </p>
            <p className="">
              {locale === "ar"
                ? "— النبي محمد ﷺ (صحيح مسلم)"
                : "— Prophet Muhammad ﷺ (Sahih Muslim)"}
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 overflow-hidden rounded-2xl max-w-6xl mx-auto max-h-96">
          <img
            src="/images/volunteer.jpg"
            alt={
              locale === "ar" ? "متطوعون حول بئر" : "Volunteers around a well"
            }
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
