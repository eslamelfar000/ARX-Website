"use client";

import { ProjectType } from "@/libs/types/types";
import { useEffect, useState, useCallback } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PlansSwiper = ({
  projectData,
  activeTab,
}: {
  projectData: ProjectType | null;
  activeTab: string;
}) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.5}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop
      >
        {projectData?.property_floor_plans?.map(
          (slides: any, index: number) => (
            <SwiperSlide
              key={index}
              className="group imageSlide w-full border border-gray-200 p-10 rounded-3xl h-full"
            >
              <div className="w-full">
                <div className="swiper-slide-active media w-full h-[600px] rounded-xl overflow-hidden">
                  <img
                    src={slides.image}
                    alt={slides.image}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default PlansSwiper;
