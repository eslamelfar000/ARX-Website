"use client";

import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import FadeAnimation from "../animations/FadeAnimation";

const WhoWeAre: NextPage = () => {
  const t = useTranslations();
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          if (statsRef.current) {
            observer.unobserve(statsRef.current); // Stop observing once triggered
          }
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div className="w-full py-16 lg:w-[85%] mx-auto bg-white font-['lato']">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full lg:h-[700px] overflow-hidden">
          {/* Left side with image */}
          <FadeAnimation direction="up">
            <div className="relative justify-end flex w-full h-full">
              <img
                src="/who.jpg"
                alt="Luxury Real Estate Building"
                className="rounded-3xl shadow-lg object-cover w-full h-[700px]"
              />
              <div className="absolute top-[-1px] left-[-1px] w-[200px] h-[60px] bg-white  rounded-tl-3xl rounded-br-3xl rounded-out-lg">
                {/* <div className="absolute bottom-[-40px] left-[1px] w-10 h-10 bg-white/90 rounded-bl-3xl rounded-out-lg"></div> */}
              </div>
            </div>
          </FadeAnimation>

          {/* Right side with content */}
          <FadeAnimation direction="right">
            <div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full"
            >
              {[
                {
                  title: t("who_we_are.total_years_of_experience"),
                  value: 20,
                  description: t("who_we_are.offices_worldwide"),
                },
                {
                  title: t("who_we_are.units_sold"),
                  value: 3,
                  description: t("who_we_are.offices_worldwide"),
                },
                {
                  title: t("who_we_are.total_constructions"),
                  value: 170,
                  description: t("who_we_are.offices_worldwide"),
                },
                {
                  title: t("who_we_are.total_clients"),
                  value: 2,
                  description: t("who_we_are.offices_worldwide"),
                },
              ].map((item, index) => (
                <FadeAnimation key={index} direction="up" delay={index * 0.2}>
                  <div className="luxury-card duration-300 flex flex-col items-start justify-between bg-[#F5F5F5] p-4 lg:p-8  rounded-3xl md:h-[335px] transition-all duration-300">
                    <h3 className="text-[14px] font-bold mb-2 border-b border-gray-300 pb-2 w-full uppercase">
                      {item.title}
                    </h3>

                    <div className="item">
                      <div className="">
                        <div className="flex items-center p-0">
                          <h1 className="text-[70px] font-[700] font-[Involve, Sans-serif] mb-[-20px]">
                            {startCounting ? (
                              <CountUp
                                start={0}
                                end={item.value}
                                duration={4}
                                className="text-[60px] md:text-[70px]"
                                enableScrollSpy={false}
                              />
                            ) : (
                              item.value // Display final value if not counting
                            )}
                          </h1>
                          <span className="text-lg font-bold text-[#035B8D] text-[40px] md:text-[50px] mt-5 md:mt-0">
                            +
                          </span>
                        </div>
                      </div>

                      <span className="text-[14px] xl:text-[20px] leading-[1] text-gray-600">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </FadeAnimation>
              ))}
            </div>
          </FadeAnimation>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
