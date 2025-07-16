"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [fadingOut, setFadingOut] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("service", formData.service);
    formDataToSend.append("message", formData.message);

    // FormSubmit hidden fields
    formDataToSend.append("_subject", "New message from your website!");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");
    try {
      const response = await fetch(
        "https://formsubmit.co/info@kama.cooking",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        // Optionally reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setFormStatus("success");
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => {
            setFormStatus("idle");
            setFadingOut(false);
          }, 1000); // Matches duration-1000 in Tailwind
        }, 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => {
            setFormStatus("idle");
            setFadingOut(false);
          }, 1000);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16"
      style={{ backgroundColor: "#2c2c2c" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-300 px-4">
              Ready to embark on your culinary journey? Send us a message and
              let's create something beautiful together.
            </p>
          </div>

          {formStatus !== "idle" && (
            <div
              className={`mb-6 text-center p-4 rounded-md transition-opacity duration-1000 ${
                formStatus === "success"
                  ? "text-green-400 border border-green-600 bg-green-900/20"
                  : "text-red-400 border border-red-600 bg-red-900/20"
              } ${fadingOut ? "opacity-0" : "opacity-100"}`}
            >
              {formStatus === "success"
                ? "✅ Your message has been sent successfully!"
                : "❌ Something went wrong. Please try again later."}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 px-4 sm:px-0"
          >
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-0 pb-2 text-base"
                required
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-0 pb-2 text-base"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-0 pb-2 text-base"
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-0 pb-2 text-base"
              />
            </div>
            <div>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange("service", value)}
              >
                <SelectTrigger className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white focus:border-red-500 focus:ring-0 pb-2 text-base">
                  <SelectValue
                    placeholder="Service Interest"
                    className="text-gray-400"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem
                    value="private-chef-services"
                    className="text-white hover:bg-gray-700"
                  >
                    Private Chef Services
                  </SelectItem>
                  <SelectItem
                    value="small-event-catering"
                    className="text-white hover:bg-gray-700"
                  >
                    Small Event Catering
                  </SelectItem>
                  <SelectItem
                    value="cooking-lessons"
                    className="text-white hover:bg-gray-700"
                  >
                    Cooking Lessons
                  </SelectItem>
                  <SelectItem
                    value="online-lessons"
                    className="text-white hover:bg-gray-700"
                  >
                    Online Lessons
                  </SelectItem>
                  <SelectItem
                    value="menu-planning"
                    className="text-white hover:bg-gray-700"
                  >
                    Menu Planning
                  </SelectItem>
                  <SelectItem
                    value="special-occasions"
                    className="text-white hover:bg-gray-700"
                  >
                    Special Occasions
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your culinary needs..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-0 pb-2 min-h-[100px] sm:min-h-[120px] resize-none text-base"
                required
              />
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
