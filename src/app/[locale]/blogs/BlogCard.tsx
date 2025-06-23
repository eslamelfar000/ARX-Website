"use client";
import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/i18n/routing";
import { BlogType } from "@/libs/types/types";
import { useTranslations } from "next-intl";

interface BlogCardProps {
  post: BlogType;
}

function BlogCard({ post }: BlogCardProps) {
  const t = useTranslations("blog");

  return (
    <div className="group relative w-full grid grid-cols-1 md:grid-cols-2 sm:gap-10 items-center border-b border-gray-200 pb-10 mb-10 h-[500px] h-[360px] lg:h-[450px]">
      <div className="media w-full  h-full rounded-3xl overflow-hidden mb-5">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover object-center w-full h-full -translate-x-6 scale-[1.2] transition-all duration-300 ease-in-out group-hover:translate-x-0"
        />
      </div>
      <div className="lg:px-5 xl:px-10">
        <Link href={`/blogs/${post.slug}`} className="rounded">
          <div className="head grid grid-cols-3 items-center gap-5 mb-8">
            <span className="text-[12px] font-medium text-black text-center bg-[#035B8D] text-white px-1 py-2 rounded-full w-full">
              {post.category || "Social Media"}
            </span>

            <span className="w-full h-[1px] bg-gray-300 block flex justify-center"></span>

            <span className="text-[12px] font-medium text-black flex text-gray-500 font-[400]">
              {new Date(post.created_at || Date.now()).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </span>
          </div>
          <div className="inline-block group">
            <Link
              href={`/blogs/${post.slug}`}
              className="text-black no-underline text-[25px] font-[700] capitalize relative group/title leading-none"
              style={{
                backgroundImage: "linear-gradient(to right, #035B8D, #035B8D)",
                backgroundSize: "0% 2px",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
                transition: "background-size 0.3s ease-out",
                display: "inline",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundSize = "100% 2px";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundSize = "0% 2px";
              }}
            >
              {post.title}
            </Link>
          </div>

          <div className="continue-reading mt-10">
            <Link
              href={`/blogs/${post.slug}`}
              className="text-black no-underline text-[18px] font-[500] capitalize relative group/title leading-none transition-all duration-300 ease-in-out"
              style={{
                backgroundImage: "linear-gradient(to right,rgb(0, 0,rgb(0, 0, 0)5B8D)",
                backgroundSize: "0% 2px",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
                display: "inline",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                paddingBottom: "1px",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundSize = "100% 2px";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundSize = "0% 2px";
              }}
            >
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#035B8D] w-full "></span>
              {t("continue_reading")}
            </Link>
          </div>

          {/* <div className="desc">
            <p className="text-[16px] font-[400] text-gray-500">
              {post.description}
            </p>
          </div> */}
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
