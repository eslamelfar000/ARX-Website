"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquiryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiry: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
      });
    }, 1000);
  };

  return (
    <div className="rounded-3xl p-8 md:p-12 w-full xl:max-w-2xl">
      {/* Header Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
          <span className="w-2 h-2 bg-[#035B8D] rounded-full"></span>
          PROPERTY
          <span className="mx-2">•</span>
          QUICK ENQUIRY
        </div>

        <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Get specialist advice for residential, commercial or property
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="h-14 bg-gray-50 border-0 rounded-2xl px-6 text-gray-600 placeholder:text-gray-400"
            placeholder="Your Name*"
          />
          <Input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="h-14 bg-gray-50 border-0 rounded-2xl px-6 text-gray-600 placeholder:text-gray-400"
            placeholder="Email*"
          />
        </div>

        {/* Phone and Inquiry Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="h-14 bg-gray-50 border-0 rounded-2xl px-6 text-gray-600 placeholder:text-gray-400"
            placeholder="Phone Number *"
          />
          <Select
            value={formData.inquiry}
            onValueChange={handleInquiryChange}
            required
          >
            <SelectTrigger className="h-14! bg-gray-50 border-0 rounded-2xl px-6 text-gray-600 w-full">
              <SelectValue placeholder="You inquiry about..." />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
              <SelectItem value="residential">Residential Property</SelectItem>
              <SelectItem value="commercial">Commercial Property</SelectItem>
              <SelectItem value="investment">
                Investment Opportunities
              </SelectItem>
              <SelectItem value="consultation">Free Consultation</SelectItem>
              <SelectItem value="valuation">Property Valuation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">
            We&apos;re excited to connect with you!
            <br />
            Required fields are marked *
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#035B8D] hover:bg-[#035B8D] text-white font-semibold px-8 py-4 rounded-2xl h-auto transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              <>
                <span>Get A Call Back</span>
                <X className="w-4 h-4 rotate-45" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
