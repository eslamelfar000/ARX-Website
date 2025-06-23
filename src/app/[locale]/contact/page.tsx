"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslations, useLocale } from "next-intl";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import SectionButton from "@/components/SharedComponent/SectionButton";
import { AnimatedElement } from "@/components/animations/AnimationType";

const iconWrapper =
  "w-8 h-8 flex items-center justify-center rounded-full bg-[#035B8D] text-white";
const inputStyle = "bg-gray-100 p-6 w-full focus:outline-none rounded-full";

const ContactPage = () => {
  const [phone, setPhone] = useState("");
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title={t("get_in_touch")}
        description={t("new_description")}
        breadcrumbs={[
          { label: locale === "en" ? "Home" : "الرئيسية", href: "/" },
          { label: t("title") },
        ]}
        backgroundImage="/images/home/banner1.png"
        height="medium"
        showDescription={false}
      />

      {/* Contact Form Section */}
      <div className="bg-white z-10 relative px-6 py-40 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="list">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  id: 1,
                  icon: <FaEnvelopeOpen />,
                  title: t("support_email"),
                  btn: t("email_us"),
                  description: "info@areeg.com",
                  link: "mailto:info@areeg.com",
                  animation: "slideUp",
                },
                {
                  id: 2,
                  icon: <FaPhoneAlt />,
                  title: t("phone_number"),
                  btn: t("call_us"),
                  description: "16591",
                  link: "tel:16591",
                  animation: "slideUp",
                  delay: 0.2,
                },
                {
                  id: 2,
                  icon: <FaMapMarkerAlt />,
                  title: t("location"),
                  btn: t("visit_us"),
                  description:
                    "New Cairo - south 90 St- top 90 building\nNew Damietta - the 3rd district – 15th St",
                  link: "https://maps.app.goo.gl/VYVirReCxBxe4zQC9",
                  animation: "slideUp",
                  delay: 0.4,
                },
              ].map((item) => (
                <li key={item.id} className="">
                  <AnimatedElement
                    key={item.id}
                    type={
                      item.animation as "slideUp" | "slideLeft" | "slideRight"
                    }
                    duration={1}
                    delay={item.delay}
                    className="w-full h-full"
                  >
                    <div className="p-4 lg:p-6 xl:p-10 border border-gray-200 rounded-3xl space-y-8 flex flex-col justify-between h-full">
                      <div className="icon text-2xl">{item.icon}</div>
                      <div className="content">
                        <h3 className="text-[20px] lg:text-[25px] font-[600]">
                          {item.title}
                        </h3>
                        <p className="text-[16px] lg:text-[20px] font-[500] opacity-60 ">
                          {item.description}
                        </p>
                      </div>

                      <div className="w-full">
                        <a href={item.link} target="_blank">
                          <button className="bg-[#035B8D] hover:bg-black w-full text-white px-6 py-4 rounded-full font-[600] hover:bg-opacity-90 transition-all duration-300">
                            {item.btn}
                          </button>
                        </a>
                      </div>
                    </div>
                  </AnimatedElement>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {/* Left Side - Info */}
            <div className="space-y-6 mb-10 lg:mb-0">
              <h3 className="text-[30px] lg:text-[50px] font-[700]">
                {t("send_message")}
              </h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                  <div>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("form.name")}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      id="email"
                      type="email"
                      placeholder={t("form.email")}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                  <div>
                    <PhoneInput
                      international
                      defaultCountry="EG"
                      value={phone}
                      onChange={(value) => setPhone(value || "")}
                      id="phone"
                      placeholder={t("form.phone")}
                      className="w-full bg-gray-100 p-6 rounded-full"
                      inputClass="phone-input"
                    />
                  </div>
                  <div>
                    <select id="interest" className={inputStyle}>
                      <option>{t("form.subject_options.interested")}</option>
                      <option>{t("form.subject_options.commercial")}</option>
                      <option>{t("form.subject_options.housing")}</option>
                      <option>
                        {t("form.subject_options.administrative")}
                      </option>
                      <option>{t("form.subject_options.medical")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    placeholder={t("form.message")}
                    className={
                      "bg-gray-100 p-6 w-full focus:outline-none rounded-3xl"
                    }
                    rows={8}
                  ></textarea>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="group flex items-center bg-white justify-center p-2 pl-5 rounded-full border border-gray-300 hover:bg-black  hover:border-black transition-all duration-300"
                  >
                    <span className="inline-flex gap-2 items-center font-medium text-[#035B8D] group-hover:text-white transition-all duration-300 rounded-full cursor-pointer">
                      <span className="text-[16px] font-[600] mx-2">
                        {t("form.send")}
                      </span>
                      <svg
                        className="w-10 h-10 bg-[#035B8D]  rounded-full p-1 text-white group-hover:rotate-305 transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] md:h-[100%] lg:h-[100%] xl:h-[700px] relative rounded-3xl">
              {/* Map image from import */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55292.51054158744!2d31.717864784673285!3d29.985697098329215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f37ff900ea15%3A0x79af3ad6eb5c0452!2sARX%20Development!5e0!3m2!1sen!2seg!4v1750696675452!5m2!1sen!2seg"
                width="100%"
                height="100%"
                className="rounded-3xl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
