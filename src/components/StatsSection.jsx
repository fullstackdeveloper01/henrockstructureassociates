'use client'
import React from "react"
import Image from "next/image"

const StatsSection = () => {
  const stats = [
    {
      value: "1000+",
      label: "Projects Successfully Delivered",
      description: (
        <>
          Our track record demonstrates our ability to deliver results on time and with precision—no matter the project scale or sector.
        </>
      ),
    },
    {
      value: "100+",
      label: "Skilled Engineers and Detailers In-House",
      description: (
        <>
          Our dedicated team enables faster turnarounds, expert-level coordination, and immediate support throughout all phases of your project.
        </>
      ),
    },
    {
      value: "20+",
      label: "Design & BIM Platforms Mastered",
      description: (
        <>
          We ensure compatibility with your tools, reduce coordination friction, and streamline every workflow from concept to construction.
        </>
      ),
    },
  ]

  return (
    <section className="relative bg-orange-600 text-white py-16 lg:px-20 overflow-hidden">
      {/* Optional background overlay using next/image for performance */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Image
          src="/assets/fid-bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">
          Proven Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative border-t-2 border-white pt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-5xl font-bold">{stat.value}</div>
              <div className="text-sm lg:text-lg mt-2">{stat.label}</div>
              <p className="text-xs lg:text-sm mt-4 opacity-90 text-justify">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
