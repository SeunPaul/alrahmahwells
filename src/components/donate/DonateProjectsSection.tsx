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
      className="relative py-16 bg-[#F0F6E5]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
      </div>
    </section>
  );
}
