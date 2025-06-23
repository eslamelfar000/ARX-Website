"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FadeAnimation from "../animations/FadeAnimation";
import Link from "next/link";
import SmallHeadSpan from "../SharedComponent/SmallHeadSpan";
import SectionButton from "../SharedComponent/SectionButton";

const OurServices: NextPage = ({}) => {
  const t = useTranslations("our_features");
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path d="M4.265 7.999c0-2.057 1.674-3.734 3.734-3.734s3.734 1.674 3.734 3.734c0 2.057-1.674 3.734-3.734 3.734s-3.734-1.674-3.734-3.734zM0 7.999c0 4.418 3.581 7.999 7.999 7.999s7.999-3.581 7.999-7.999c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999z"></path>
          <path d="M0 24.001c0-4.418 3.581-7.999 7.999-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999s-7.999-3.583-7.999-7.999z"></path>
          <path d="M15.999 7.999c0-4.418 3.583-7.999 8.002-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999s-8.002-3.581-8.002-7.999z"></path>
          <path d="M20.266 24.001c0-2.057 1.674-3.734 3.734-3.734s3.734 1.674 3.734 3.734c0 2.060-1.674 3.734-3.734 3.734s-3.734-1.677-3.734-3.734zM15.999 24.001c0 4.418 3.581 7.999 7.999 7.999s7.999-3.581 7.999-7.999c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999z"></path>
        </svg>
      ),
      title: t("Residential.title"),
      description: t("Residential.description"),
      image: "/h2_tab-icon1.jpg",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path d="M15.999 24.532c4.117 0 7.466 3.348 7.466 7.466h8.533c0-8.837-7.162-15.999-15.999-15.999s-15.999 7.165-15.999 16.001h8.533c0-4.117 3.348-7.468 7.466-7.468z"></path>
          <path d="M15.999 7.466c-4.117 0-7.466-3.348-7.466-7.466h-8.533c0 8.837 7.162 15.999 15.999 15.999s16.001-7.162 16.001-15.999h-8.533c0 4.117-3.351 7.466-7.468 7.466z"></path>
        </svg>
      ),
      title: t("Medical.title"),
      description: t("Medical.description"),
      image: "/h2_tab-icon2.jpg",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path d="M24.001 5.333c-1.471 0-2.666 1.195-2.666 2.666s1.195 2.667 2.666 2.667 2.666-1.195 2.666-2.667h5.333c0 4.418-3.581 7.999-7.999 7.999s-7.999-3.581-7.999-7.999c-0.002-4.418 3.581-7.999 7.999-7.999v5.333z"></path>
          <path d="M5.333 7.999c0 1.471 1.195 2.667 2.666 2.667s2.667-1.195 2.667-2.667c0-1.471-1.195-2.666-2.667-2.666v-5.333c4.418 0 7.999 3.581 7.999 7.999s-3.581 7.999-7.999 7.999c-4.418 0-7.999-3.581-7.999-7.999h5.333z"></path>
          <path d="M26.667 24.001c0-1.471-1.195-2.667-2.666-2.667s-2.667 1.195-2.667 2.667c0 1.471 1.195 2.666 2.667 2.666v5.333c-4.418 0-7.999-3.581-7.999-7.999s3.581-7.999 7.999-7.999c4.418 0 7.999 3.581 7.999 7.999h-5.333z"></path>
          <path d="M7.999 26.667c1.471 0 2.667-1.195 2.667-2.666s-1.195-2.667-2.667-2.667c-1.471 0-2.666 1.195-2.666 2.667h-5.333c0-4.418 3.581-7.999 7.999-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999v-5.333z"></path>
        </svg>
      ),
      title: t("Commercial.title"),
      description: t("Commercial.description"),
      image: "/h2_tab-icon3.jpg",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path d="M24 0c4.418 0 7.999 3.581 7.999 7.999h-16.001c0-4.418 3.583-7.999 8.002-7.999z"></path>
          <path d="M24 7.999c4.418 0 7.999 3.581 7.999 7.999h-16.001c0-4.418 3.583-7.999 8.002-7.999z"></path>
          <path d="M7.999 32c-4.418 0-7.999-3.583-7.999-7.999h15.999c0 4.416-3.581 7.999-7.999 7.999z"></path>
          <path d="M7.999 24.001c-4.418 0-7.999-3.583-7.999-8.002h15.999c0 4.418-3.581 8.002-7.999 8.002z"></path>
          <path d="M32 24.001c0 4.418-3.581 7.999-7.999 7.999v-16.001c4.416 0 7.999 3.583 7.999 8.002z"></path>
          <path d="M24.001 24.001c0 4.418-3.581 7.999-7.999 7.999v-16.001c4.416 0 7.999 3.583 7.999 8.002z"></path>
          <path d="M0 7.999c0-4.418 3.581-7.999 7.999-7.999v15.999c-4.418 0-7.999-3.581-7.999-7.999z"></path>
          <path d="M7.999 7.999c0-4.418 3.581-7.999 7.999-7.999v15.999c-4.418 0-7.999-3.581-7.999-7.999z"></path>
        </svg>
      ),
      title: t("Administrative.title"),
      description: t("Administrative.description"),
      image: "/h2_tab-icon4.jpg",
    },
  ];

  return (
    <div className="w-full py-20 pt-40 mx-auto bg-white font-['lato'] mt-[-100px] rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center justify-between px-4">
          {/* Left Column - Tabs and Content */}
          <div className="space-y-8 w-full">
            {/* Tab Content */}
            <SmallHeadSpan>{t("span")}</SmallHeadSpan>
            {/* Section Title */}
            <div className="relative mb-12">
              <h2 className="text-[40px] lg:text-[60px] font-[700] leading-[0.9em] font-bold mt-2 font-['Helvetica']">
                {t("title")}
              </h2>
            </div>
            <SectionButton href="/about">{t("read_more")}</SectionButton>
          </div>

          {/* Right Column - Image */}
          <div className="cover w-full">
            <FadeAnimation direction="in" key={`image-${activeTab}`}>
              <div className="relative rounded-3xl">
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  width={500}
                  height={500}
                  className="object-cover rounded-3xl w-full h-full shadow-none"
                />
                <div className="absolute top-[-1px] left-[-1px] w-[200px] h-[60px] bg-white rounded-tl-3xl shadow-none border-none rounded-br-3xl"></div>
              </div>
            </FadeAnimation>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 items-start justify-center">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                activeTab === index ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="">
                <div
                  className={`text-[#035B8D] relative mb-3 border-b-2 border-gray-300 pb-8 after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[2px] after:bg-[#035B8D] after:transition-all after:duration-300 ${
                    activeTab === index
                      ? "fill-[#035B8D] after:w-full"
                      : "fill-black"
                  }`}
                >
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-2xl capitalize">
                    {service.title}
                  </h3>
                  <p className="text-md mt-1 text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
