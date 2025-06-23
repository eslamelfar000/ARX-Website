"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // مشاريع كمثال
  const projects = [
    {
      id: 1,
      title: "مشروع النخيل",
      description: "مجمع سكني فاخر بمواصفات عالمية",
      image: "/projects/palm.jpg",
      link: "/projects/palm",
    },
    {
      id: 2,
      title: "برج الإمارات",
      description: "أطول برج سكني في المنطقة",
      image: "/projects/tower.jpg",
      link: "/projects/tower",
    },
    {
      id: 3,
      title: "مدينة الرياض",
      description: "تطوير متكامل لوسط المدينة",
      image: "/projects/riyadh.jpg",
      link: "/projects/riyadh",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] py-20 overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">مشاريعنا</h2>

          <div className="relative h-[80vh]">
            {projects.map((project, index) => {
              const scale = useTransform(
                scrollYProgress,
                [index * 0.2, (index + 1) * 0.2],
                [1 - index * 0.1, 1 - (index + 1) * 0.1]
              );

              const opacity = useTransform(
                scrollYProgress,
                [index * 0.2, (index + 1) * 0.2],
                [1, 0]
              );

              const y = useTransform(
                scrollYProgress,
                [index * 0.2, (index + 1) * 0.2],
                [0, -100]
              );

              return (
                <motion.div
                  key={project.id}
                  className={`absolute inset-0 flex items-center justify-center ${
                    index !== 0 ? "pointer-events-none" : ""
                  }`}
                  style={{
                    scale,
                    opacity,
                    y,
                    zIndex: projects.length - index,
                  }}
                >
                  <div className="relative w-full max-w-4xl h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
                      <motion.h3
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-xl text-white mb-6"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                      <Link
                        href={project.link}
                        className="bg-white text-black px-6 py-3 rounded-lg font-medium w-fit"
                      >
                        عرض المشروع
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
