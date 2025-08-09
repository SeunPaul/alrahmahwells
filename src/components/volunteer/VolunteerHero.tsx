"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function VolunteerHero() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  return (
    <section
      className="pt-24 md:pt-32 pb-10 px-4 sm:px-6 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-secondary-dark">
              {locale === "ar" ? (
                <>
                  امنح وقتك. غيّر حياة.{" "}
                  <span className="text-primary-light">اكسب أجراً دائماً.</span>
                </>
              ) : (
                <>
                  Give Your Time. Change a Life.{" "}
                  <span className="text-primary-light">
                    Earn Eternal Rewards.
                  </span>
                </>
              )}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
              {locale === "ar"
                ? "انضم إلى قضية موثقة شرعياً وكن إجابةً لدعاء أحدهم."
                : "Join a halal‑certified cause and become the answer to someone’s dua."}
            </p>
          </div>

          <div className="bg-[#f7f9f2] border border-[#dfe8cf] rounded-xl p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {locale === "ar"
                ? "من نفّس عن مؤمن كربة من كرب الدنيا نفّس الله عنه كربة من كرب يوم القيامة."
                : "Whoever removes a hardship for a believer in this world, Allah will remove a hardship for him on the Day of Judgment."}
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              {locale === "ar"
                ? "— النبي محمد ﷺ (صحيح مسلم)"
                : "— Prophet Muhammad ﷺ (Sahih Muslim)"}
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 overflow-hidden rounded-2xl shadow">
          <img
            src="/images/home-6.jpg"
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
