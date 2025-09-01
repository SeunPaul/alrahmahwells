import { impactStories } from "@/data/impactStories";
import { notFound } from "next/navigation";

export default async function ImpactStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = "ar" as const;
  const isRTL = true;

  const { slug } = await params;
  const story = impactStories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section with Title */}
      <section className="pt-32 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Block */}
          <div
            data-aos="fade-up"
            className="bg-secondary-dark text-white p-8 md:p-12 rounded-2xl mb-12 text-center"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              {story.title[locale]}
            </h1>
          </div>

          {/* Main Image */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative aspect-[16/6] overflow-hidden rounded-2xl shadow-lg mb-12"
          >
            <img
              src={story.image}
              alt={story.imageAlt[locale]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-delay="300" className="mb-8">
            <p className="text-lg text-gray-600 font-medium">
              {story.subtitle[locale]}
            </p>
          </div>

          {/* Story Content */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              {story.sections.map((section, index) => (
                <div key={index}>
                  {section.type === "quote" ? (
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-light">
                      <p className="text-gray-700 leading-relaxed italic">
                        {section.content[locale]}
                      </p>
                    </div>
                  ) : section.type === "highlight" ? (
                    <div className="bg-primary-light/10 p-6 rounded-xl border border-primary-light/20">
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        {section.content[locale]}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {section.content[locale]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
