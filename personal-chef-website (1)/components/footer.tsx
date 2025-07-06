"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z" />
    </svg>
  )

  const TikTokIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )

  return (
    <footer className="bg-stone-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-8 lg:gap-12">
          {/* Section 1: Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-stone-300 text-sm">
                    123 Culinary Street
                    <br />
                    Foodie District, FD 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-stone-300 text-sm">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-stone-300 text-sm">hello@kamalab.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-stone-300 text-sm">
                    Mon-Fri: 9AM-7PM
                    <br />
                    Sat-Sun: 10AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-stone-300 hover:text-red-500 transition-colors">
                About Us
              </a>
              <a href="#menu" className="text-stone-300 hover:text-red-500 transition-colors">
                Menu
              </a>
              <a href="#services" className="text-stone-300 hover:text-red-500 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-stone-300 hover:text-red-500 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Section 3: Logo and Social Media */}
          <div className="flex flex-col items-center sm:items-start lg:items-center space-y-6 min-w-[120px]">
            <div className="mb-2">
              <Image
                src="/kama-logo.png"
                alt="KAMA Pure Culinary Lab"
                width={70}
                height={70}
                className="rounded-full sm:w-[80px] sm:h-[80px]"
              />
            </div>

            <div className="flex flex-row space-x-4 lg:flex-col lg:space-x-0 lg:space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-stone-700 text-stone-300 hover:text-white w-12 h-12 flex items-center justify-center"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-stone-700 text-stone-300 hover:text-white w-12 h-12 flex items-center justify-center"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-stone-700 text-stone-300 hover:text-white w-12 h-12 flex items-center justify-center"
              >
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} KAMA Pure Culinary Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
