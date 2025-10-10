"use client";

import { useState } from "react";
import { getLocaleFromPathname } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";
import { usePathname } from "next/navigation";

interface ProjectCard {
  id: string;
  title: string;
  location: string;
  goal: number;
  raised: number;
  status: "Ongoing" | "Completed" | "Urgent";
  outreach: string;
  image: string;
  progress: number;
}

interface DonateProjectsSectionProps {
  onDonateClick?: (amount: number | string) => void;
}

export default function DonateProjectsSection({
  onDonateClick,
}: DonateProjectsSectionProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isRTL = rtlLocales.includes(locale as Locale);

  const [currentPage, setCurrentPage] = useState(1);
  const [donationAmounts, setDonationAmounts] = useState<{
    [key: string]: string;
  }>({});

  const projects: ProjectCard[] = [
    {
      id: "1",
      title:
        locale === "ar"
          ? "بئر يعمل بالطاقة الشمسية + رعاية طبية مجانية"
          : "Solar-Powered Borehole + Free Medical Outreach",
      location: locale === "ar" ? "كافرين، السنغال" : "Kaffrine, Senegal",
      goal: 17000,
      raised: 2300,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، رعاية طبية مجانية، توزيع القرآن"
          : "Outreach: Clean water, free medical outreach, Qur'an distribution",
      image: "/images/contact.jpg",
      progress: 52,
    },
    {
      id: "2",
      title:
        locale === "ar"
          ? "بئر شمسي + تجديد المسجد"
          : "Solar Borehole Well + Mosque Renovation",
      location: locale === "ar" ? "دوسو، النيجر" : "Dosso, Niger",
      goal: 15000,
      raised: 15000,
      status: "Completed",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، تجديد المسجد"
          : "Outreach: Clean water, mosque renovation",
      image: "/images/home-5.jpg",
      progress: 100,
    },
    {
      id: "3",
      title:
        locale === "ar"
          ? "بئر شمسي + مركز تعليم إسلامي"
          : "Solar Well + Islamic Learning Center",
      location:
        locale === "ar" ? "تامباكوندا، السنغال" : "Tambacounda, Senegal",
      goal: 14000,
      raised: 1100,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مواد تعليمية، مأوى مدرسي"
          : "Outreach: Clean water, learning materials, school shelter",
      image: "/images/home-6.jpg",
      progress: 50.7,
    },
    {
      id: "4",
      title:
        locale === "ar"
          ? "بئر شمسي + طبي + حملة قرآن"
          : "Solar Borehole Well + Medical + Qur'an Drive",
      location: locale === "ar" ? "غايا، النيجر" : "Gaya, Niger",
      goal: 14500,
      raised: 3300,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، علاج الأمراض، هدايا القرآن"
          : "Outreach: Clean water, disease treatment, Qur'an gifts",
      image: "/images/home-7.jpg",
      progress: 37.4,
    },
    {
      id: "5",
      title:
        locale === "ar"
          ? "بئر + مستلزمات مدرسة إسلامية"
          : "Borehole + Islamic School Supplies",
      location: locale === "ar" ? "موبتي، مالي" : "Mopti, Mali",
      goal: 3000,
      raised: 15000,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مستلزمات تعليمية"
          : "Outreach: Clean water, educational supplies",
      image: "/images/impact.jpg",
      progress: 26,
    },
    {
      id: "6",
      title:
        locale === "ar"
          ? "مشروع مياه + بناء مسجد"
          : "Water Project + Mosque Construction",
      location: locale === "ar" ? "زيندر، النيجر" : "Zinder, Niger",
      goal: 31000,
      raised: 11600,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، بناء مسجد"
          : "Outreach: Clean water, mosque construction",
      image: "/images/volunteer.jpg",
      progress: 64.4,
    },
    {
      id: "7",
      title:
        locale === "ar" ? "بئر يعمل بالطاقة الشمسية" : "Solar-Powered Well",
      location: locale === "ar" ? "غبارنجا، ليبيريا" : "Gbarnga, Liberia",
      goal: 8500,
      raised: 5800,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة بعد سنوات من استخدام مياه المستنقعات"
          : "Outreach: Clean water after years of using swamp water",
      image: "/images/borehole.jpg",
      progress: 68.2,
    },
    {
      id: "8",
      title:
        locale === "ar"
          ? "بئر + توزيع القرآن"
          : "Borehole + Qur'an Distribution",
      location: locale === "ar" ? "كيدوغو، السنغال" : "Kédougou, Senegal",
      goal: 14000,
      raised: 14000,
      status: "Completed",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، توزيع القرآن"
          : "Outreach: Clean water, Qur'an distribution",
      image: "/images/home-5.jpg",
      progress: 100,
    },
    {
      id: "9",
      title: locale === "ar" ? "بئر + معسكر طبي" : "Well + Medical Camp",
      location: locale === "ar" ? "كوسانار، السنغال" : "Koussanar, Senegal",
      goal: 19500,
      raised: 3400,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، معسكر طبي"
          : "Outreach: Clean water, medical camp",
      image: "/images/home-6.jpg",
      progress: 35.8,
    },
    {
      id: "10",
      title:
        locale === "ar"
          ? "مياه نظيفة + بناء مدرسة إسلامية"
          : "Clean Water + Islamic School Build",
      location: locale === "ar" ? "مونروفيا، ليبيريا" : "Monrovia, Liberia",
      goal: 35000,
      raised: 17500,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، بناء مدرسة إسلامية"
          : "Outreach: Clean water, Islamic school construction",
      image: "/images/home-7.jpg",
      progress: 50,
    },
    {
      id: "11",
      title: locale === "ar" ? "بئر شمسي" : "Solar Borehole Well",
      location: locale === "ar" ? "ميدوغوري، نيجيريا" : "Maiduguri, Nigeria",
      goal: 9800,
      raised: 9800,
      status: "Completed",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة لمخيم النازحين"
          : "Outreach: Clean water for IDP camp with 2,000+ people",
      image: "/images/impact.jpg",
      progress: 100,
    },
    {
      id: "12",
      title:
        locale === "ar"
          ? "بئر شمسي + مأوى تعليمي"
          : "Solar Borehole Well + Learning Shelter",
      location:
        locale === "ar" ? "بانفورا، بوركينا فاسو" : "Banfora, Burkina Faso",
      goal: 29000,
      raised: 7366,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مأوى تعليمي"
          : "Outreach: Clean water, learning shelter",
      image: "/images/volunteer.jpg",
      progress: 25.4,
    },
    {
      id: "13",
      title: locale === "ar" ? "مسجد + حملة قرآن" : "Mosque + Quran Drive",
      location: locale === "ar" ? "أغاديز، النيجر" : "Agadez, Niger",
      goal: 13500,
      raised: 10395,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: بناء مسجد، توزيع القرآن"
          : "Outreach: Mosque construction, Qur'an distribution",
      image: "/images/contact.jpg",
      progress: 77,
    },
    {
      id: "14",
      title: locale === "ar" ? "بئر + مساعدة طبية" : "Borehole + Medical Aid",
      location:
        locale === "ar" ? "مقاطعة لوفا، ليبيريا" : "Lofa County, Liberia",
      goal: 16200,
      raised: 7452,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مساعدة طبية"
          : "Outreach: Clean water, medical aid",
      image: "/images/home-5.jpg",
      progress: 46,
    },
    {
      id: "15",
      title: locale === "ar" ? "مشروع مياه شمسي" : "Solar Water Project",
      location: locale === "ar" ? "سيكاسو، مالي" : "Sikasso, Mali",
      goal: 9000,
      raised: 9000,
      status: "Completed",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة تعمل 24/7 بالطاقة الشمسية"
          : "Outreach: Clean water running 24/7 powered by solar",
      image: "/images/home-6.jpg",
      progress: 100,
    },
    {
      id: "18",
      title:
        locale === "ar"
          ? "بئر شمسي + مستلزمات مدرسة قرآنية"
          : "Solar Borehole + Qur'anic School Supplies",
      location: locale === "ar" ? "كوتونو، بنين" : "Cotonou, Benin",
      goal: 13000,
      raised: 6721,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مستلزمات مدرسة قرآنية"
          : "Outreach: Clean water, Qur'anic school supplies",
      image: "/images/home-7.jpg",
      progress: 51.7,
    },
    {
      id: "19",
      title: locale === "ar" ? "بئر شمسي فقط" : "Solar Well Only",
      location: locale === "ar" ? "كانيفينغ، غامبيا" : "Kanifing, The Gambia",
      goal: 8000,
      raised: 3300,
      status: "Ongoing",
      outreach:
        locale === "ar" ? "التوعية: مياه نظيفة" : "Outreach: Clean water",
      image: "/images/impact.jpg",
      progress: 41.25,
    },
    {
      id: "20",
      title:
        locale === "ar"
          ? "مشروع مياه + توعية طبية"
          : "Water Project + Medical Outreach",
      location:
        locale === "ar"
          ? "بوبو ديولاسو، بوركينا فاسو"
          : "Bobo-Dioulasso, Burkina Faso",
      goal: 13000,
      raised: 7306,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، توعية طبية"
          : "Outreach: Clean water, medical outreach",
      image: "/images/volunteer.jpg",
      progress: 56.2,
    },
    {
      id: "21",
      title: locale === "ar" ? "بناء مسجد" : "Mosque Construction",
      location: locale === "ar" ? "أتاكبامي، توغو" : "Atakpamé, Togo",
      goal: 15500,
      raised: 13685,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: بناء مسجد"
          : "Outreach: Mosque construction",
      image: "/images/contact.jpg",
      progress: 88.3,
    },
    {
      id: "22",
      title: locale === "ar" ? "بئر + قرآن مجاني" : "Borehole + Free Qur'ans",
      location: locale === "ar" ? "كايا، بوركينا فاسو" : "Kaya, Burkina Faso",
      goal: 9700,
      raised: 4995,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، قرآن مجاني"
          : "Outreach: Clean water, free Qur'ans",
      image: "/images/home-5.jpg",
      progress: 51.5,
    },
    {
      id: "23",
      title:
        locale === "ar"
          ? "مشروع مياه + مستلزمات مدرسية"
          : "Water Project + School Stationery",
      location: locale === "ar" ? "شمال غانا" : "Northern Ghana",
      goal: 11000,
      raised: 5995,
      status: "Ongoing",
      outreach:
        locale === "ar"
          ? "التوعية: مياه نظيفة، مستلزمات مدرسية"
          : "Outreach: Clean water, school stationery",
      image: "/images/home-6.jpg",
      progress: 54.5,
    },
    {
      id: "24",
      title: locale === "ar" ? "بناء مسجد" : "Mosque Construction",
      location: locale === "ar" ? "سوكوتو، نيجيريا" : "Sokoto, Nigeria",
      goal: 14000,
      raised: 14000,
      status: "Completed",
      outreach:
        locale === "ar"
          ? "التوعية: بناء مسجد جميل"
          : "Outreach: Beautiful mosque construction",
      image: "/images/home-7.jpg",
      progress: 100,
    },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handleDonationAmountChange = (projectId: string, amount: string) => {
    setDonationAmounts((prev) => ({
      ...prev,
      [projectId]: amount,
    }));
  };

  const handleDonate = (projectId: string) => {
    const amount = donationAmounts[projectId];
    if (amount && onDonateClick) {
      // Parse the amount to a number if it's a valid number, otherwise pass as string
      const numericAmount = parseFloat(amount.replace(/[^0-9.-]/g, ""));
      if (!isNaN(numericAmount) && numericAmount > 0) {
        onDonateClick(numericAmount);
      } else {
        onDonateClick(amount); // Pass as string for custom amounts
      }
    } else {
      // Fallback behavior
      console.log(`Donating ${amount} to project ${projectId}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Urgent":
        return "text-red-600";
      case "Ongoing":
      default:
        return "text-[#D99201]";
    }
  };

  const getStatusText = (status: string) => {
    if (locale === "ar") {
      switch (status) {
        case "Completed":
          return "مكتمل";
        case "Urgent":
          return "عاجل";
        case "Ongoing":
        default:
          return "جارٍ";
      }
    }
    return status;
  };

  return (
    <section
      className="relative py-16 bg-[#F0F6E5] isolate"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-light mb-8 max-w-4xl mx-auto leading-tight"
          >
            {locale === "ar"
              ? "تبرعك يفعل أكثر من مجرد إعطاء الماء"
              : "Your Donation Does More Than Give Water"}
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-1 text-lg md:text-xl text-[#0D2F2B] font-medium max-w-4xl mx-auto"
          >
            <p>
              {locale === "ar"
                ? "إنه يحيي الإيمان. يمنع الأمراض. يتيح الوضوء والصلاة والاتصال بالله."
                : "It revives faith. It prevents diseases. It enables wudu, salah, and connection to Allah."}
            </p>
            <p>
              {locale === "ar" ? (
                <>
                  هذا ليس مجرد ماء. هذا{" "}
                  <span className="font-bold text-primary-dark">رحمة</span>. هذا{" "}
                  <span className="font-bold text-primary-dark">
                    صدقة جارية
                  </span>
                  .
                </>
              ) : (
                <>
                  This is not just water. This is{" "}
                  <span className="font-bold text-primary-dark">Rahmah</span>{" "}
                  (mercy). This is{" "}
                  <span className="font-bold text-secondary-dark">
                    Sadaqah Jāriyah
                  </span>
                  .
                </>
              )}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#EDF4E5] border border-[#C0CFAD] rounded-xl overflow-hidden p-3"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: "url('/illustrations/numbers-bg.png')",
                  backgroundSize: 1000,
                }}
              />
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Project Content */}
              <div className="py-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#0D2F2B] mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-primary-light text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4 mr-1 text-secondary-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-dark h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Goal, Raised, Status */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {locale === "ar" ? "الهدف" : "Goal"}
                    </div>
                    <div className="font-bold text-gray-800">
                      ${project.goal.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {locale === "ar" ? "تم جمعه" : "Raised"}
                    </div>
                    <div className="font-bold text-gray-800">
                      ${project.raised.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {locale === "ar" ? "الحالة" : "Status"}
                    </div>
                    <div
                      className={`font-bold ${getStatusColor(project.status)}`}
                    >
                      {getStatusText(project.status)}
                    </div>
                  </div>
                </div>

                {/* Outreach Description */}
                <p className="text-sm text-[#0D2F2B] font-medium mb-4 line-clamp-2">
                  {project.outreach}
                </p>

                {/* Donation Section */}
                <div className="space-y-3">
                  {project.status === "Completed" ? (
                    <div className="w-full text-center text-sm text-secondary-light font-medium border-t border-dashed border-t-secondary-light mt-10 py-6">
                      {locale === "ar" ? "التبرع مغلق" : "Donation Closed"}
                    </div>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder={
                          locale === "ar"
                            ? "$ أدخل تبرعك"
                            : "$ Enter your donation"
                        }
                        value={donationAmounts[project.id] || ""}
                        onChange={(e) =>
                          handleDonationAmountChange(project.id, e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent text-sm"
                      />
                      <button
                        onClick={() => handleDonate(project.id)}
                        className="w-full py-2 px-4 bg-[#D99201] hover:bg-[#B8780D] text-white rounded-lg font-semibold transition-colors duration-200"
                      >
                        {locale === "ar" ? "تبرع الآن" : "Donate Now"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {locale === "ar" ? "السابق" : "Previous"}
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary-dark text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {locale === "ar" ? "التالي" : "Next"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
