// "use client";
import herobg from "../../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc (1).jpg";
import ProjectCard from "./components/ProjectCard";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { ProjectType } from "@/libs/types/types";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import Filter from "./components/Filter";
import ProjectsClient from "./ProjectsClient";

const ProjectsPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const t = await getTranslations("projects");

  const feachData = async () => {
    try {
      const response = await getData(
        "properties",
        {},
        new AxiosHeaders({
          lang: locale,
        })
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const projects = await feachData();

  console.log(projects);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section with Search */}
      <PageHero
        title={t("name")}
        backgroundImage={"/images/home/banner1.png"}
        height="medium"
        hideDescription={true}
        breadcrumbs={[
          { label: locale === "en" ? "Home" : "الرئيسية", href: "/" },
          { label: t("name") },
        ]}
      />

      <ProjectsClient projects={projects} locale={locale} />
    </div>
  );
};

export default ProjectsPage;
