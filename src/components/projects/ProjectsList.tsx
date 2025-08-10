"use client";

import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);

  const projects = [
    {
      title:
        locale === "ar"
          ? "إنقاذ الأرواح في كالابان، مالي"
          : "Saving Lives in Kalaban, Mali",
      description:
        locale === "ar"
          ? "انتشر التيفوئيد في كالابان. بنينا بئراً خلال 4 أسابيع في ساحة القرية. إلى جانب ذلك، أقيم معسكر طبي مجاني عالج أكثر من 400 مريض. كما وزعنا القرآن على كل منزل - تاركين أجسادهم وأرواحهم مغذية."
          : "An outbreak of typhoid had gripped Kalaban. We built a borehole within 4 weeks, in the village square. Alongside it, a free medical camp was held, treating over 400 patients. We also distributed Qurans to every home – leaving both their bodies and spirits nourished.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "right" as const,
    },
    {
      title:
        locale === "ar"
          ? "استعادة الكرامة في جبيمي، توغو"
          : "Dignity Restored in Gbeme, Togo",
      description:
        locale === "ar"
          ? "كانت النساء في جبيمي يستحممن ويشربن من مستنقع. اليوم، محطة مياه تعمل بالطاقة الشمسية بناها تبرعاتكم تعمل ليلاً ونهاراً. كما مولنا رعاية صحية مجتمعية عالجت أكثر من 300 شخص. استقبلت هدية القرآن بدموع، حيث قال كثيرون إنهم لم يملكوا واحدة من قبل."
          : "Women in Gbeme used to bathe in and drink from a swamp. Today, a solar-powered water station built by your donations runs day and night. We also funded a community health outreach where over 300 people were treated. The gift of the Quran was received with tears, as many said they had never owned one before.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "left" as const,
    },
    {
      title:
        locale === "ar"
          ? "الأمل في بانفورا، بوركينا فاسو"
          : "Hope in Banfora, Burkina Faso",
      description:
        locale === "ar"
          ? "كان أطفال بانفورا مرضى جداً للذهاب إلى المدرسة. تدخلنا وفر مصدر مياه نظيف ورعاية طبية فورية للأطفال المصابين بالزحار. أكثر من 700 شخص يشربون مياه آمنة يومياً الآن. كل عائلة أيضاً تلقت قرآن – مما أحيا ممارسة الإيمان في القرية."
          : "Banfora's children were too sick to go to school. Our intervention provided a clean water source and immediate medical care for children affected by dysentery. Over 700 people now drink safe water daily. Each family also received a Quran – reviving the practice of faith in the village.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "right" as const,
    },
    {
      title:
        locale === "ar"
          ? "إحضار الحياة إلى قرية كوماسي، ساحل العاج"
          : "Bringing Life to Koumassi Village, Côte d'Ivoire",
      description:
        locale === "ar"
          ? "في كوماسي، كانت القرية بأكملها تعتمد على نهر موحل تشاركه مع الحيوانات. قمنا بتثبيت بئر تعمل بالطاقة الشمسية، مما أعطى أكثر من 1200 شخص إمكانية الوصول إلى مياه نظيفة جارية. كما قدمنا رعاية طبية مجانية للأطفال وكبار السن المصابين بالكوليرا والتيفوئيد. لأول مرة، كل عائلة تلقت قرآن مجاني – هدية أطلقوا عليها 'نور لقلوبنا'."
          : "In Koumassi, the entire village depended on a muddy river shared with animals. We installed a solar-powered borehole, giving over 1,200 people access to clean running water. We also provided free medical care for children and the elderly suffering from cholera and typhoid. For the first time, every family received free Qurans – a gift they called 'light for our hearts'.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "left" as const,
    },
    {
      title:
        locale === "ar"
          ? "الشفاء والماء في زمفارا، نيجيريا"
          : "Healing and Water in Zamfara, Nigeria",
      description:
        locale === "ar"
          ? "في هذا الجزء الجاف من شمال نيجيريا، فقد مئات العائلات أحباءهم بسبب الأمراض المنقولة بالماء. مشروعنا لم يوفر فقط بئراً عميقاً يعمل بالطاقة الشمسية، بل أيضاً أحضر أطباء عالجوا أكثر من 500 شخص مجاناً. النساء، اللواتي كن مثقلات بالمشي اللامتناهي للمياه القذرة، يبتسمن الآن وهن يملأن جرار المياه النظيفة بجانب البئر الموهوب."
          : "In this drought-stricken part of Northern Nigeria, hundreds of families had lost loved ones to water-borne illnesses. Our project not only provided a deep solar-powered borehole, but also brought in doctors who treated over 500 people free of charge. Women, once burdened by endless walks for dirty water, now smile as they fill clean jerrycans beside our donated well.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "right" as const,
    },
    {
      title:
        locale === "ar"
          ? "فصل جديد في تامباكوندا، السنغال"
          : "A New Chapter in Tambakunda, Senegal",
      description:
        locale === "ar"
          ? "لم يكن في تامباكوندا مصدر مياه ضمن 10 كم. كان الأطفال يمشون لساعات يومياً. غيرنا هذا ببئر قوي يخدم أكثر من 900 قروي. كما وزعنا القرآن ونظمنا جلسات صلاة مجتمعية شكراً. قال أحد الشيوخ: 'الآن يمكننا أداء الوضوء بمياه نظيفة. جزى الله خيراً من وراء هذا'."
          : "Tambakunda had no water source within 10 km. Children walked for hours daily. We changed this with a powerful borehole serving over 900 villagers. We also distributed Qurans and organized community prayer sessions in gratitude. One elder said, 'Now we can perform ablution with clean water. May Allah reward those behind this.'",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "left" as const,
    },
    {
      title:
        locale === "ar"
          ? "الإيمان والمياه الجارية في ماكالوندي، النيجر"
          : "Faith & Flowing Water in Makalondi, Niger",
      description:
        locale === "ar"
          ? "في هذا المجتمع الحدودي النائي، كان أقرب مياه رحلة خطرة تستغرق 8 ساعات. بعد تثبيت بئر عالي السعة وعقد رعاية طبية، شهدنا لحظة مؤثرة: أدت القرية بأكملها الوضوء والصلاة الجماعية بمياه نظيفة لأول مرة في تاريخهم. كل أسرة أيضاً تلقت نسخة من القرآن."
          : "In this remote border community, the nearest water was a dangerous 8-hour trek away. After installing a high-capacity borehole and holding a medical outreach, we witnessed a moving moment: the entire village performed communal ablution and Salah with clean water for the first time in their history. Every household also received a copy of the Quran.",
      imageSrc: "/images/survival-1.png",
      imageAlt:
        locale === "ar"
          ? "طفل يغسل وجهه بالماء"
          : "Child washing face with water",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section
      className="py-16 bg-[#F0F6E5]"
      dir={isRTL ? "rtl" : "ltr"}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={200 + index * 100}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              imagePosition={project.imagePosition}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
