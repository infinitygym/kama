"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const spanTexts = [
    "A return to identity",
    "A return to community",
    "A return to joy",
  ];

  const [visible, setVisible] = useState([false, false, false]);
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
      { threshold: 0.3 }
    );

    refs.forEach((ref) => ref.current && observer.observe(ref.current));
    return () => {
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
    <section id="about" className="py-8 sm:py-12 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Top Section omitted for brevity */}

        {/* Bottom Section */}
        <div className="max-w-full mx-auto text-center space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-300 px-4 leading-relaxed">
            But more than anything, we offer you a chance to breathe. To slow down.<br />
            To listen to the language of your roots.
          </p>

          <div className="text-lg sm:text-xl font-medium text-white mt-8 sm:mt-12 px-4">
            <p>Because cooking, here, isn't just a skill—it's a return.</p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              {spanTexts.map((text, i) => (
                <span
                  key={i}
                  ref={refs[i]}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  className={`text-base sm:text-lg transform transition-all duration-700 ease-out 
                    ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
