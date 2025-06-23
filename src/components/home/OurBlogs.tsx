// pages/ProjectAndBlog.tsx
"use client";

import React from "react";
import { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pm1 from "../../../public/images/home/PrimeMiniste1.png";
import pm2 from "../../../public/images/home/PrimeMiniste2.png";
import pm3 from "../../../public/images/home/PrimeMiniste3.png";
import { BlogType } from "@/libs/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "lucide-react";

type Slide = {
  title: string;
  location?: string;
  image: StaticImageData;
};

const projectSlides: Slide[] = [
  { title: "O7 Mall – O7", location: "New Damietta", image: pm1 },
  { title: "Aura Mall", location: "New Damietta", image: pm2 },
  { title: "Metro Towers", location: "Cairo", image: pm3 },
];

const OurBlogs = ({ blogs }: { blogs: BlogType[] }) => {
  const t = useTranslations("home");
  const tBlog = useTranslations("blog");

  return (
    <div className="space-y-24 py-30 max-w-6xl mx-auto">
      {/* ---------------------------- */}
      {/* Blog Section */}
      {/* ---------------------------- */}
      <section className="container mx-auto px-4">
        <div className="mb-14 flex flex-col lg:flex-row justify-between lg:items-end gap-5">
          <div className="max-w-2xl flex flex-col items-start">
            <h3 className="text-[12px] font-[600]  uppercase mb-5 p-2 px-5 border border-[#035B8D] rounded-full">
              {t("our_blog")}
            </h3>
            <h2
              className="font-[Cinzel] text-3xl lg:text-5xl font-bold uppercase leading-[1.2] tracking-tight"
              dangerouslySetInnerHTML={{
                __html: t("discover_inspiration_and_trends"),
              }}
            />
          </div>
          <div className="flex justify-end items-center">
            <Link
              href="/blogs"
              className="group text-[14px] font-medium text-black flex items-center gap-2 hover:text-white hover:bg-[#035B8D] px-1 pl-3 py-1 rounded-full border border-gray-300 transition-all duration-300 ease-in-out"
            >
              {t("view_all")}
              <ArrowRightIcon className="w-10 h-10 p-2 bg-[#035B8D] rounded-full text-white group-hover:bg-white group-hover:text-[#035B8D] transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            loop
            // navigation={{
            //   prevEl: ".blog-prev-button",
            //   nextEl: ".blog-next-button",
            // }}
            // pagination={{
            //   clickable: true,
            //   el: ".blog-pagination",
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {blogs?.map((post: BlogType, index: number) => (
              <SwiperSlide key={index} className="group">
                <div className="relative w-full">
                  <div className="media w-full h-60 rounded-3xl overflow-hidden mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full -translate-x-6 scale-[1.2] transition-all duration-300 ease-in-out group-hover:translate-x-0"
                    />
                  </div>
                  <div className="">
                    <Link href={`/blogs/${post.slug}`} className="rounded">
                      <div className="head grid grid-cols-3 items-center gap-5 mb-4">
                        <span className="text-[12px] font-medium text-black text-center bg-[#035B8D] text-white px-1 py-2 rounded-full w-full">
                          {tBlog("category")}
                        </span>

                        <span className="w-full h-[1px] bg-gray-300 block flex justify-center"></span>

                        <span className="text-[12px] font-medium text-black flex  text-gray-500 font-[400]">
                          March 18, 2025
                        </span>
                      </div>
                      <div className="inline-block group">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-black no-underline text-lg font-[700] font-[Cinzel] capitalize relative group/title leading-none"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #035B8D, #035B8D)",
                            backgroundSize: "0% 2px",
                            backgroundPosition: "0 100%",
                            backgroundRepeat: "no-repeat",
                            transition: "background-size 0.3s ease-out",
                            display: "inline",
                            boxDecorationBreak: "clone",
                            WebkitBoxDecorationBreak: "clone",
                            paddingBottom: "2px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundSize = "100% 2px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundSize = "0% 2px";
                          }}
                        >
                          {post.title}
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default OurBlogs;
