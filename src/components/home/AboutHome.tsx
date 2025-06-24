"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Vision from "../../../public/cityscape-svgrepo-com.svg";
import Mission from "../../../public/real-estate-investment-svgrepo-com.svg";
import Values from "../../../public/values.svg";
import { useLocale, useTranslations } from "next-intl";
import SectionButton from "../SharedComponent/SectionButton";
import { AnimatedElement } from "../animations/AnimationType";

const AboutHome: NextPage = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  return (
    <div className="w-full mx-auto bg-white font-['lato'] bg-[url('/about.jpg')] bg-no-repeat bg-center bg-cover overflow-hidden">
      <div className="overlay bg-black/30 pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="">
            <div className="">
              <div className="flex items-end justify-between gap-4 mb-18 flex-col md:flex-row">
                <AnimatedElement type="slideLeft" duration={1} className="w-full h-full">
                <h1 className="flex-1 text-4xl font-bold font-[Lucida Grande] text-white capitalize">
                  {t("description")}
                </h1>
                </AnimatedElement>

                {/* Learn More button */}
                <AnimatedElement type="slideRight" duration={1} className="w-full h-full">
                <div className="flex-1 flex justify-end">
                  <SectionButton href={`/${locale}/about`}>
                    {t("learn_more")}
                  </SectionButton>
                </div>
                </AnimatedElement>
              </div>

              {/* Three columns section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/** Vision */}
                <AnimatedElement type="slideLeft" duration={1} className="w-full h-full">
                  <div className="flex flex-col items-start bg-black/30 backdrop-blur-lg p-10 h-full rounded-3xl relative z-[1]">
                    <Image
                      src={Vision}
                      alt="Vision Icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-[25px] font-bold  mb-2 text-white">
                      {t("vision_title")}
                    </h3>
                    <p className="text-[18px] text-white/80">
                      {t("vision_description")}
                    </p>
                  </div>
                </AnimatedElement>

                {/** Mission */}
                <AnimatedElement type="slideUp" duration={2} className="w-full h-full">
                  <div className="flex flex-col items-start bg-black/30 backdrop-blur-lg p-10 h-full rounded-3xl relative z-[1]">
                    <Image
                      src={Mission}
                      alt="Mission Icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-[25px] font-bold  mb-2 text-white">
                      {t("mission_title")}
                    </h3>
                    <p className="text-[18px] text-white/80">
                      {t("mission_description")}
                    </p>
                  </div>
                </AnimatedElement>

                {/** Values */}
                <AnimatedElement type="slideRight" duration={1} className="w-full h-full">
                  <div className="flex flex-col items-start bg-black/30 backdrop-blur-lg p-10 h-full rounded-3xl relative z-[1]">
                    <Image
                      src={Values}
                      alt="Values Icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-[25px] font-bold  mb-2 text-white">
                      {t("values_title")}
                    </h3>
                    <p className="text-[18px] text-white/80">
                      {t("values_description")}
                    </p>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
