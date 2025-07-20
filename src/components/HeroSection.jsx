'use client' // Important for Next.js client component

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper/modules'

export default function HeroSection({ activeIndex, setActiveIndex }) {
  const router = useRouter()

  // Optional fallback for internal state
  const [internalIndex, setInternalIndex] = useState(0)
  const index = activeIndex ?? internalIndex
  const updateIndex = setActiveIndex ?? setInternalIndex

  const slideStyles = [
    {
      backgroundImage: '/assets/hero-slider/new2.png',
      title: 'Building Smarter with Precision-Driven BIM Solutions',
      subtitle:
        'Our BIM division delivers end‑to‑end digital solutions that connect every project stakeholder. We build accurate 3D models with integrated schedules (4D) and cost data (5D) to eliminate clashes before construction begins.',
      buttonText: 'View Details',
      link: '/services/bim-modeling',
    },
    {
      backgroundImage: '/assets/hero-slider/rcc-client1.png',
      title: 'Engineered for Strength – RCC, Steel & Wood Structures',
      subtitle:
        'We engineer robust concrete, steel, and timber structures that stand the test of time and code requirements...',
      buttonText: 'View Details',
      link: '/services/structural-designs',
    },
    {
      backgroundImage: '/assets/hero-slider/peb-client1.png',
      title: 'Efficient PEB Design for Faster, Cost-Effective Construction',
      subtitle:
        'Accelerate your project with factory‑fabricated steel kits engineered for seamless on‑site assembly...',
      buttonText: 'View Details',
      link: '/services/pre-engineering',
    },
    {
      backgroundImage: '/assets/hero-slider/rabar.png',
      title: 'Smart Rebar Detailing That Protects Your Timeline and Structure',
      subtitle:
        'From foundations to slabs, our rebar detailing ensures every bar is correctly sized...',
      buttonText: 'View Details',
      link: '/services/rabar-detailing',
    },
  ]

  const handleViewDetails = () => {
    router.push(slideStyles[index].link)
  }

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background image slider */}
      <Swiper
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[EffectFade, Autoplay]}
        onSlideChange={(swiper) => updateIndex(swiper.realIndex)}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slideStyles.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 px-6 md:px-16 lg:px-24 text-white flex flex-col justify-center max-w-[1250px]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {slideStyles[index].title}
        </h1>
        <p className="mt-4 text-md">{slideStyles[index].subtitle}</p>
        <button
          onClick={handleViewDetails}
          className="mt-6 bg-orange-600 text-white px-4 py-3 md:w-1/4 w-full rounded shadow hover:bg-orange-700 transition"
        >
          {slideStyles[index].buttonText}
        </button>
      </div>
    </section>
  )
}
