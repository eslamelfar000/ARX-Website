import React from "react";
import Image from "next/image";
import partnersImg from "../../../public/images/home/Our Partners.png";
import bgImage from "../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc.jpg";
import { useTranslations } from "next-intl";

const SupportersPage: React.FC = () => {
  const t = useTranslations("supporters");
  return (
    <section className="bg-white py-[70px]">
      {/* Our Partners Image below metrics */}
      <div className="relative flex flex-col justify-center items-center">
        <div className="head text-center text-gray-900 max-w-2xl mb-10 px-8">
          <span className="text-xl font-bold font-[Cinzel]">
            {t("our_partners")}
          </span>
        </div>

        <Image src={partnersImg} alt="Our Partners" width={700} height={150} />
      </div>
    </section>
  );
};

export default SupportersPage;
