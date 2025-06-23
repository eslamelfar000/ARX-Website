"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
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

const iconWrapper =
  "w-8 h-8 flex items-center justify-center rounded-full bg-[#035B8D] text-white font-['Lato']";
const inputStyle =
  "bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#035B8D] font-['Lato']";

const ContactPage = () => {
  const [phone, setPhone] = useState("");
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <div className="bg-white font-['Cinzel']">
      {/* Hero Section */}
      <PageHero
        title={t("title")}
        description={`${t("description_part_one")} ${t(
          "description_part_two"
        )}`}
        breadcrumbs={[
          { label: locale === "en" ? "Home" : "الرئيسية", href: "/" },
          { label: t("title") },
        ]}
        backgroundImage="/images/home/banner1.png"
        height="large"
        showDescription={false}
      />

      {/* Contact Form Section */}
      <div className="flex justify-center -mt-52 z-10 relative px-4">
        <div className="bg-white shadow-lg rounded-3xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 p-6 gap-6">
          {/* Left Side - Info */}
          <div className="space-y-4 text-gray-700 md:col-span-2">
            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-['Lato'] text-[#035B8D]">
              {t("reach_us")}
            </h3>
            <p className="text-[clamp(0.875rem,2.5vw,1rem)]">
              {t("reach_us_description")}
            </p>
            <ul className="space-y-4 text-[clamp(0.875rem,2.5vw,1rem)]">
              <li className="flex items-start gap-3">
                <span className={iconWrapper}>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-['Lato']">{t("office_address")}</p>
                  <p>
                    New Cairo - south 90 St- top 90 building
                    <br />
                    New Damietta - the 3rd district – 15th St
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className={iconWrapper}>
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-['Lato']">{t("phone_number")}</p>
                  <p>16591</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className={iconWrapper}>
                  <FaEnvelope />
                </span>
                <div>
                  <p className="font-['Lato']">{t("email_us")}</p>
                  <p>info@areeg.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className={iconWrapper}>
                  <FaCalendarAlt />
                </span>
                <div>
                  <p className="font-['Lato']">{t("schedule_meeting")}</p>
                </div>
              </li>
            </ul>
            <div className="pt-4 border-t">
              <p className="text-sm font-['Lato'] mb-2">{t("follow_social")}</p>
              <div className="flex space-x-3">
                <span className={iconWrapper}>
                  <FaFacebookF />
                </span>
                <span className={iconWrapper}>
                  <FaInstagram />
                </span>
                <span className={iconWrapper}>
                  <FaLinkedinIn />
                </span>
                <span className={iconWrapper}>
                  <FaYoutube />
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6 md:col-span-3">
            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-['Lato'] pt-12 text-[#035B8D]">
              {t("send_message")}
            </h3>
            <form className="space-y-4 font-['Lato']">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    {t("form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t("form.name_placeholder")}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    {t("form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t("form.email_placeholder")}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1">
                    {t("form.phone")}
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="EG"
                    value={phone}
                    onChange={(value) => setPhone(value || "")}
                    id="phone"
                    placeholder={t("form.phone_placeholder")}
                    className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#035B8D] font-['Lato']"
                    inputClass="phone-input"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm mb-1">
                    {t("form.subject")}
                  </label>
                  <select id="interest" className={inputStyle}>
                    <option>{t("form.subject_options.interested")}</option>
                    <option>{t("form.subject_options.commercial")}</option>
                    <option>{t("form.subject_options.housing")}</option>
                    <option>{t("form.subject_options.administrative")}</option>
                    <option>{t("form.subject_options.medical")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  placeholder={t("form.message_placeholder")}
                  className={inputStyle}
                  rows={4}
                ></textarea>
              </div>

              <div className="flex flex-row-reverse">
                <button
                  type="submit"
                  className="bg-[#035B8D] text-white px-6 py-2 rounded hover:bg-opacity-90 w-full sm:w-auto"
                >
                  {t("form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="text-center mt-20 px-4">
        <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-['Lato']">
          {t("locations")}
        </h3>
        <div className="mt-8 w-full h-96 bg-gray-200 flex justify-center items-center">
          {/* Map Placeholder */}
          <p className="text-gray-500 text-[clamp(0.875rem,2.5vw,1rem)]">
            [Map Showing City & Street Locations]
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
