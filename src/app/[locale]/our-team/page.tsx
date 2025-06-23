import PageHero from "@/components/PageHero";
import SmallHeadSpan from "@/components/SharedComponent/SmallHeadSpan";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { getAllTeamMembers } from "@/libs/helpers/teamData";
import TeamMemberCard from "@/components/TeamMemberCard";

function page() {
  const t = useTranslations("our_team");
  const locale = useLocale();
  const teamMembers = getAllTeamMembers();

  return (
    <div>
      <PageHero
        title={t("title")}
        // description={t("description")}
        breadcrumbs={[
          { label: locale === "en" ? "Home" : "الرئيسية", href: "/" },
          { label: t("title") },
        ]}
        backgroundImage="/images/home/aboutus.png"
        height="medium"
      />
      {/* BOARD OF DIRECTORS */}
      <section className="pt-30 px-4 pb-60 relative z-10 bg-white rounded-b-3xl">
        <div className="mx-auto text-center mb-12 leading-none">
          <div className="flex justify-center">
            <SmallHeadSpan>{t("title")}</SmallHeadSpan>
          </div>
          <h2 className="text-[70px] font-semibold">
            <p>{t("global_executive")}</p>
            <p>{t("leadership")}</p>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-25 gap-x-5">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
