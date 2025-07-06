"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
    </svg>
  )

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800 text-gray-300">
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-800 text-gray-300">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Far Left */}
          <div className="flex items-center">
            <Image
              src="/kama-logo.png"
              alt="KAMA Pure Culinary Lab"
              width={50}
              height={50}
              className="rounded-full sm:w-[60px] sm:h-[60px]"
            />
            <div className="ml-3 hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-white">KAMA</h1>
              <p className="text-xs text-gray-300 uppercase tracking-wide">Pure Culinary Lab</p>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-red-500 font-medium transition-colors">
              About Us
            </a>
            <a href="#menu" className="text-gray-300 hover:text-red-500 font-medium transition-colors">
              Menu
            </a>
            <a href="#services" className="text-gray-300 hover:text-red-500 font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-red-500 font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Lessons Button & Mobile Menu - Far Right */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base">
              Lessons
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 hover:bg-gray-800 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-80 bg-gray-900 shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center">
                  <Image
                    src="/kama-logo.png"
                    alt="KAMA Pure Culinary Lab"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <h2 className="text-lg font-bold text-white">KAMA</h2>
                    <p className="text-xs text-gray-300 uppercase tracking-wide">Pure Culinary Lab</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-gray-800 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col space-y-6">
                  <a
                    href="#about"
                    className="text-xl text-gray-300 hover:text-red-500 font-medium transition-colors py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="#menu"
                    className="text-xl text-gray-300 hover:text-red-500 font-medium transition-colors py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </a>
                  <a
                    href="#services"
                    className="text-xl text-gray-300 hover:text-red-500 font-medium transition-colors py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#contact"
                    className="text-xl text-gray-300 hover:text-red-500 font-medium transition-colors py-3 border-b border-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </nav>

              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-center space-x-4 mb-4">
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-800 text-gray-300">
                    <FacebookIcon />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-800 text-gray-300">
                    <InstagramIcon />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-600"></div>
    </header>
  )
}
