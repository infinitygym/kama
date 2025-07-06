import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function MenuSection() {
  const menuCategories = [
    {
      title: "Private Cooking Experiences",
      description:
        "Intimate culinary journeys in the comfort of your own space. Experience authentic Cretan flavors through personalized cooking sessions that honor tradition while embracing your unique tastes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Traditional Cooking Lessons",
      description:
        "Hands-on traditional cooking lessons with a modern twist. Learn age-old techniques passed down through generations, reimagined for today's kitchen and lifestyle.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Food Pairing Journeys",
      description:
        "Discover the art of pairing using locally sourced and seasonal ingredients. Explore how flavors dance together, creating harmonious experiences that celebrate Crete's abundant harvest.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Online Courses",
      description:
        "Bring the soul of Crete into your own kitchen from anywhere in the world. Our online courses guide you through traditional recipes, techniques, and the stories that make each dish meaningful.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="menu" className="py-12 sm:py-16 relative" style={{ backgroundColor: "#0B6E3C" }}>
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10 pointer-events-none"></div>  {/* Blur overlay remove this single line*/}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-center px-6 sm:px-12" style={{ backgroundColor: "rgba(11, 110, 60, 0.8)" }}>
  <div className="text-center">
    <p className="text-5xl sm:text-6xl font-bold text-white leading-tight">
      Coming soon ...
    </p>
    <p className="text-2xl sm:text-3xl font-medium text-white mt-4">
      Contact us to create your desired menu
    </p>
  </div>
</div>                                                                                   {/* Remove till here */}

      <div className="container mx-auto px-4">
        {/* Logo positioned at top right */}
        <div className="absolute top-6 sm:top-8 right-6 sm:right-8">
          <Image
            src="/kama-logo.png"
            alt="KAMA Pure Culinary Lab"
            width={60}
            height={60}
            className="rounded-full opacity-60 sm:w-[80px] sm:h-[80px]"
          />
        </div>

        {/* Centered content */}
        <div className="text-center mb-8 sm:mb-12 pt-6 sm:pt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Menu Categories</h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-green-100">
            <p className="text-base sm:text-lg leading-relaxed">Our offerings include:</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-green-100 hover:bg-green-200 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-green-900 mb-2 sm:mb-3">{category.title}</h3>
                <p className="text-sm sm:text-base text-green-700 leading-relaxed">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
