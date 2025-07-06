"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16" style={{ backgroundColor: "#2c2c2c" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg text-gray-300 px-4">
              Ready to embark on your culinary journey? Send us a message and let's create something beautiful together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 px-4 sm:px-0">
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
              <Select onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="bg-transparent border-0 border-b-2 border-gray-500 rounded-none text-white focus:border-red-500 focus:ring-0 pb-2 text-base">
                  <SelectValue placeholder="Service Interest" className="text-gray-400" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="private-cooking-experiences" className="text-white hover:bg-gray-700">
                    Private Cooking Experiences
                  </SelectItem>
                  <SelectItem value="traditional-cooking-lessons" className="text-white hover:bg-gray-700">
                    Traditional Cooking Lessons
                  </SelectItem>
                  <SelectItem value="food-pairing-journeys" className="text-white hover:bg-gray-700">
                    Food Pairing Journeys
                  </SelectItem>
                  <SelectItem value="online-courses" className="text-white hover:bg-gray-700">
                    Online Courses
                  </SelectItem>
                  <SelectItem value="private-chef-services" className="text-white hover:bg-gray-700">
                    Private Chef Services
                  </SelectItem>
                  <SelectItem value="small-event-catering" className="text-white hover:bg-gray-700">
                    Small Event Catering
                  </SelectItem>
                  <SelectItem value="cooking-lessons" className="text-white hover:bg-gray-700">
                    Cooking Lessons
                  </SelectItem>
                  <SelectItem value="online-lessons" className="text-white hover:bg-gray-700">
                    Online Lessons
                  </SelectItem>
                  <SelectItem value="menu-planning" className="text-white hover:bg-gray-700">
                    Menu Planning
                  </SelectItem>
                  <SelectItem value="special-occasions" className="text-white hover:bg-gray-700">
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
  )
}
