"use client";
import React, { useRef, useEffect } from "react";
import "../../app/last.css";
import { AnimatedElement } from "../animations/AnimationType";
import { ProjectType } from "@/libs/types/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pm1 from "../../../public/images/home/PrimeMiniste1.png";
import pm2 from "../../../public/images/home/PrimeMiniste2.png";
import pm3 from "../../../public/images/home/PrimeMiniste3.png";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import SmallHeadSpan from "../SharedComponent/SmallHeadSpan";

export const TestCards = ({
  projects,
}: {
  projects: ProjectType[];
}) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations("home");
  const locale = useLocale();

  // Use fetched projects data
  const bannerProjects = projects.map((project, index) => ({
    id: project.id || index + 1,
    title: project.title,
    location: project.location,
    status: t("under_construction"), // Default status since it's not in ProjectType
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

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!cardsContainer || cards.length === 0) return;

    // Set CSS custom properties
    cardsContainer.style.setProperty("--cards-count", cards.length.toString());
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );

    // Set up scroll observer for each card
    const observers: IntersectionObserver[] = [];

    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const cardInner = card.querySelector(".card__inner") as HTMLElement;

      if (!cardInner) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              const percentageY = Math.max(
                0,
                Math.min(
                  1,
                  (window.innerHeight - rect.top) /
                    (window.innerHeight + rect.height)
                )
              );

              cardInner.style.scale = String(1 - (1 - toScale) * percentageY);
              cardInner.style.filter = `brightness(${
                1 - (1 - 0.6) * percentageY
              })`;
            }
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: `-${offsetTop}px 0px -${
            window.innerHeight - cards[0].clientHeight
          }px 0px`,
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section>
      <div className="space space--small"></div>
      {/* Stacked Cards Container */}
      <AnimatedElement type="slideUp" duration={1} className="w-full h-full">
        <section
          className="cards w-full grid grid-cols-1 gap-[500px]"
          ref={cardsContainerRef}
        >
          {displayProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="card h-[600px] inset-0 transition-all duration-1000 ease-out sticky top-0"
                data-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
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
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full bg-yellow-500`}
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
        </section>
      </AnimatedElement>
      <div className="space"></div>
    </section>
  );
};
