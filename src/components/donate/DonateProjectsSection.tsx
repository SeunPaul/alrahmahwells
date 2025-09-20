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

export default function DonateProjectsSection() {
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
      image: "/images/survival-1.png",
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
      image: "/images/survival-2.png",
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
      image: "/images/survival-3.png",
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
      image: "/images/survival-4.png",
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
      image: "/images/survival-1.png",
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
      image: "/images/survival-2.png",
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
    console.log(`Donating ${amount} to project ${projectId}`);
    // Handle donation logic here
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
    <section className="py-16 bg-[#F8F9FA]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-[#D99201] text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4 mr-1"
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
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.outreach}
                </p>

                {/* Donation Section */}
                <div className="space-y-3">
                  {project.status === "Completed" ? (
                    <button
                      disabled
                      className="w-full py-2 px-4 bg-green-100 text-green-700 rounded-lg font-semibold cursor-not-allowed"
                    >
                      {locale === "ar" ? "التبرع مغلق" : "Donation Closed"}
                    </button>
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
        <div className="flex justify-center items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-semibold ${
                currentPage === page
                  ? "bg-primary-dark text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
