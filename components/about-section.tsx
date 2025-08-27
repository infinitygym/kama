import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const spanTexts = [
    "A return to identity",
    "A return to community",
    "A return to joy",
  ];
  const [visible, setVisible] = useState([false, false, false]);

  // Tailwind delay classes (can be adjusted)
  const delays = ["delay-150", "delay-300", "delay-450"];
  
  const refs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((r) => r.current === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of the span is visible
    );
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  return (
    <section id="about" className="py-8 sm:py-12 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Top Section: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-10 sm:mb-16">
          {/* Left side - Original Text content */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                Welcome to KAMA Pure Culinary Lab
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <strong>Nestled in the soul of Crete</strong>, KAMA was not created to impress, but to{" "}
                <strong>awaken</strong>. To awaken memories, senses, and emotions that too often lie dormant in a
                fast-moving world. In a time when food is mass-produced and experiences feel curated, we invite you to
                return—to <strong>authenticity</strong>.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <strong>KAMA is more than a kitchen.</strong> It is a <strong>sanctuary</strong> where cooking becomes
                therapy, and meals become stories. Here, we don't teach recipes. We remember them, passed down from
                grandmothers, told through the scent of wild herbs, the crackle of olive wood in fire, and the golden
                glisten of fresh-pressed oil.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We believe that food is <strong>personal</strong>. That cooking for yourself is a form of{" "}
                <strong>self-love</strong>. That sharing a meal is the{" "}
                <strong>oldest and most sacred act of connection</strong>. Whether you're a seasoned home cook, an
                adventurous traveler, or someone simply looking to reconnect, KAMA offers a place to{" "}
                <strong>feel, taste, and remember</strong>.
              </p>
            </div>
          </div>

          {/* Right side - Image and offerings taking full width */}
          <div className="flex flex-col space-y-6 w-full">
            <div className="relative w-full h-[200px] sm:h-[250px]">
              <Image
                src="/kama-about-image.jpg"
                alt="KAMA Pure Culinary Lab Logo"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Our Offerings under the image */}
            <div className="space-y-4 w-full">
              <h3 className="text-lg sm:text-xl font-semibold text-white text-center">Our offerings include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Private cooking experiences</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Hands-on traditional cooking lessons with a modern twist</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Food pairing journeys using locally sourced and seasonal ingredients</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Online courses for those who wish to bring the soul of Crete into their own kitchen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Philosophy Text spanning full width */}
        <div className="max-w-full mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-6 sm:space-y-8 text-gray-300">
            <p className="text-base sm:text-lg leading-relaxed px-4">
              But more than anything, we offer you a chance to breathe. To slow down.
              <br />
              To listen to the language of your roots.
            </p>

            <div className="text-lg sm:text-xl font-medium text-white mt-8 sm:mt-12 px-4">
              <p>Because cooking, here, isn't just a skill—it's a return.</p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                {spanTexts.map((text, i) => (
                  <span
  key={i}
  ref={refs[i]}
  className={`text-base sm:text-lg transform transition-opacity transition-transform duration-700 ease-out
    ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} 
    ${delays[i]}`}
>
  {text}
</span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 sm:pt-8 space-y-4 sm:space-y-6 px-4">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We are currently preparing our space to welcome you soon.
              <br />
              Until then, follow our journey and stay connected.
            </p>

            <p className="text-xl sm:text-2xl font-bold text-white">
              KAMA invites you to remember who you are.
              <br />
              <span className="text-base sm:text-lg font-normal text-gray-300">
                One dish, one story, one moment at a time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
