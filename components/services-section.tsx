"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setInView(true)
      observer.unobserve(entry.target)
    }
  },
  {
    threshold: 0, // trigger as soon as any part is visible
    rootMargin: "0px 0px -150px 0px", // wait until the element is 150px into the viewport
  }
)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}

export default function ServicesSection() {
  const services = [
    {
      title: "Private Chef Services",
      description:
        "Enjoy a personalized culinary experience in the comfort of your home or villa. Our private chef crafts authentic Cretan menus using local ingredients, bringing tradition, flavor, and warmth directly to your table.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Small Event Catering",
      description:
        "Elevate your intimate gatherings with our catering services. From private dinners to special celebrations, we create seasonal, Cretan – Mediterranean inspired menus tailored to your tastes, ensuring every moment is memorable, flavorful, and authentically local.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Cooking Lessons",
      description:
        "Join our immersive cooking lessons and explore the essence of Cretan, Greek, and Mediterranean cuisine in personalized one-on-one or small group sessions. Using local ingredients and age-old techniques, you'll prepare authentic dishes while uncovering the cultural stories behind every bite.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Online Lessons",
      description:
        "Bring the spirit of Greece into your own kitchen. Our online cooking lessons guide you through traditional recipes, techniques, and stories—step by step—so you can cook, learn, and connect from anywhere in the world.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Menu Planning",
      description:
        "Let us design the perfect menu for your occasion. We craft personalized, seasonal menus rooted in Cretan and Mediterranean traditions, balancing flavor, storytelling, and dietary needs to create a meaningful culinary experience.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Special Occasions",
      description:
        "Celebrate life's meaningful moments with unforgettable food. From birthdays to anniversaries and everything in between, we create heartfelt culinary experiences tailored to your unique story and setting.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 relative overflow-x-hidden" style={{ backgroundColor: "#334475" }}>
      <div className="container mx-auto px-4">
        <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
          <Image
            src="/kama-logo.png"
            alt="KAMA Pure Culinary Lab"
            width={60}
            height={60}
            className="rounded-full opacity-60 sm:w-[80px] sm:h-[80px]"
          />
        </div>

        <div className="text-center mb-12 sm:mb-16 pt-6 sm:pt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto px-4">
            From private dining to cooking lessons, we offer a comprehensive range of culinary services tailored to your
            needs.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const ref = useRef<HTMLDivElement>(null)
            const inView = useInView(ref)
            const controls = useAnimation()
useEffect(() => {
  if (inView) {
    controls.start({
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    })
  } else {
    controls.set({
      x: initialX,
      opacity: 0,
      filter: "blur(10px)",
    })
  }
}, [inView, controls])

            // Start hidden state
            const initialX = index % 2 === 1 ? 100 : -100

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={false}
                animate={controls}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ willChange: "transform, opacity, filter" }}
              >
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""} px-4 lg:px-0`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-base sm:text-lg text-blue-100 leading-relaxed">{service.description}</p>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
