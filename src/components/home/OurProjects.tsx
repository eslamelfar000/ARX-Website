"use client";

import React, { useState, useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pm1 from "../../../public/images/home/PrimeMiniste1.png";
import pm2 from "../../../public/images/home/PrimeMiniste2.png";
import pm3 from "../../../public/images/home/PrimeMiniste3.png";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { ProjectType } from "@/libs/types/types";

const OurProjects = ({ projects }: { projects: ProjectType[] }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const t = useTranslations("home");
  const locale = useLocale();

  // Use fetched projects data
  const bannerProjects = projects.map((project, index) => ({
    id: project.id || index + 1,
    title: project.title,
    location: project.location,
    status: "In Progress", // Default status since it's not in ProjectType
    description: project.description || "Project description coming soon.",
    image: project.cover,
    slug: project.slug,
  }));

  // Fallback to sample data if no projects are fetched
  const displayProjects =
    bannerProjects.length > 0
      ? bannerProjects
      : [
          {
            id: 1,
            title: "O7 Mall – O7",
            location: "New Damietta",
            status: "Completed",
            description:
              "A state-of-the-art shopping mall featuring premium retail spaces, entertainment zones, and modern amenities. This landmark project showcases innovative architectural design and sustainable development practices.",
            image: pm1.src,
            slug: "o7-mall",
          },
          {
            id: 2,
            title: "Aura Mall",
            location: "New Damietta",
            status: "In Progress",
            description:
              "An upcoming luxury shopping destination that will redefine retail experiences. Featuring international brands, fine dining, and entertainment facilities in a contemporary architectural masterpiece.",
            image: pm2.src,
            slug: "aura-mall",
          },
          {
            id: 3,
            title: "Metro Towers",
            location: "Cairo",
            status: "Planning",
            description:
              "A prestigious mixed-use development combining residential, commercial, and hospitality spaces. This iconic project will become a new landmark in Cairo's skyline with world-class amenities.",
            image: pm3.src,
            slug: "metro-towers",
          },
        ];

  // Scroll-based card stacking effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section = document.getElementById("projects-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section (0 to 1)
      const sectionProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - sectionTop + windowHeight) /
            (sectionHeight + windowHeight)
        )
      );

      // Calculate which card should be active based on scroll progress
      const cardCount = displayProjects.length;
      const newActiveIndex = Math.floor(sectionProgress * cardCount);
      setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayProjects.length]);

  return (
    <div className="space-y-24 py-12">
      {/* ---------------------------- */}
      {/* Projects Banner Section */}
      {/* ---------------------------- */}
      <section
        id="projects-section"
        className="relative overflow-hidden py-20 bg-[#f6f3ec]"
      >
        <div className="cover max-w-6xl mx-auto px-4">
          <div className="flex flex-col justify-center items-center mb-10">
            <span className="text-5xl max-w-2xl text-center uppercase font-extrabold font-[Cinzel] text-gray-900">
              {t("our_projects_description")}
            </span>

            <Link
              href="/projects"
              className="mt-4 items-center justify-center w-fit flex gap-1 text-[#035B8D] font-medium transition hover:text-[#E1A12B]"
            >
              {t("see_all_projects")}{" "}
              <svg
                className={`${locale === "ar" ? "mirror" : ""}`}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50008 3.21484L7.56008 4.15484L11.2801 7.88151H3.16675V9.21484H11.2801L7.56008 12.9415L8.50008 13.8815L13.8334 8.54818L8.50008 3.21484Z"
                  fill="#035B8D"
                />
              </svg>
            </Link>
          </div>

          {/* Stacked Cards Container */}
          <div className="relative w-full grid grid-cols-1 gap-10">
            {displayProjects.map((project, index) => {
              const isActive = index === activeCardIndex;
              const isAbove = index < activeCardIndex;
              const isBelow = index > activeCardIndex;

              // Calculate transform and opacity based on position
              let transform = "";
              let opacity = 1;
              let zIndex = 10;

              if (isActive) {
                // Active card - full size and opacity, centered
                transform = "translateY(0) scale(1)";
                opacity = 1;
                zIndex = 30;
              } else if (isAbove) {
                // Cards above - fixed at top, scaled down and faded
                const distance = activeCardIndex - index;
                transform = "translateY(0) scale(0.7)"; // Fixed at top, scaled down
                opacity = Math.max(0.2, 1 - distance * 0.3);
                zIndex = 25 - distance;
              } else if (isBelow) {
                // Cards below - positioned below, will slide up
                const distance = index - activeCardIndex;
                const translateY = distance * 100; // Small offset for stacking
                transform = `translateY(${translateY}px) scale(0.9)`;
                opacity = Math.max(0.3, 1 - distance * 0.2);
                zIndex = 15 - distance;
              }

              return (
                <div
                  key={project.id}
                  className="h-[600px] inset-0 transition-all duration-1000 ease-out"
                  style={
                    {
                      // transform,
                      // opacity,
                      // zIndex,
                    }
                  }
                >
                  <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="container mx-auto px-8 w-full">
                        <div className="flex items-center justify-end">
                          {/* Project Details Card */}
                          <div className="rounded-3xl p-8 relative bg-[url('/download.png')] bg-cover bg-bottom w-full sm:w-[500px]">
                            {/* Status Badge */}
                            <div className="mb-4">
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                  project.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : project.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    project.status === "Completed"
                                      ? "bg-green-500"
                                      : project.status === "In Progress"
                                      ? "bg-yellow-500"
                                      : "bg-blue-500"
                                  }`}
                                ></span>
                                {project.status}
                              </span>
                            </div>

                            {/* Project Title with Bottom Border */}
                            <div className="mb-4">
                              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {project.title}
                              </h2>
                              <div className="w-full h-[1px] bg-gray-300 rounded-full"></div>
                            </div>

                            {/* Location */}
                            <div className="mb-4 flex items-center text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2 text-[#035B8D]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{project.location}</span>
                            </div>

                            {/* Floating Button with Arrow - Bottom Right */}
                            <div className="bg-black/20 rounded-full absolute bottom-[-20px] sm:bottom-[-25px] sm:right-[65px] right-[50px]">
                              <Link
                                href={`/projects/${project.slug}`}
                                className="group inline-flex items-center bg-[#035B8D] hover:bg-[#E1A12B] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                              >
                                <svg
                                  className={`w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-300 ${
                                    locale === "ar" ? "mirror" : ""
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
