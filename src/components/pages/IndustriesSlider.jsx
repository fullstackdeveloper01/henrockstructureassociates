'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Dynamically import Swiper for client-side rendering
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function IndustrySection({
  title,
  description,
  industries,
  bottomline,
}) {
  const swiperRef = useRef(null);

  // State to handle the swiper instance, helps in navigation
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Update swiperInstance when the Swiper is initialized
  useEffect(() => {
    if (swiperRef.current && !swiperInstance) {
      setSwiperInstance(swiperRef.current.swiper);
    }
  }, [swiperInstance]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Title and Arrows */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-white mt-2 max-w-3xl text-sm">{description}</p>
          </div>

          {/* Arrows for desktop only */}
          <div className="hidden md:flex gap-2 items-center">
            <div
              className="swiper-prev p-4 bg-white shadow cursor-pointer text-gray-700"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <FaChevronLeft />
            </div>
            <div
              className="swiper-next p-4 bg-white shadow cursor-pointer text-gray-700"
              onClick={() => swiperInstance?.slideNext()}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          {industries.map((industry, i) => (
            <SwiperSlide key={industry.id || i}> {/* Ensure the key is unique */}
              <div className="h-full bg-white relative shadow p-6 flex flex-col justify-between border">
                <div>
                  <div className="mb-3">
                    <img
                      src={industry.image ?? '/images/default.png'}
                      alt={industry.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-justify leading-relaxed min-h-[180px]">
                    {industry.description}
                  </p>
                </div>
                <div className="text-gray-200 text-6xl font-bold text-right mt-4 absolute top-0 right-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots for mobile */}
        <div className="swiper-pagination md:hidden flex justify-center mt-6" />

        {/* Closing paragraph */}
        <p className="mt-10 text-center text-gray-700 max-w-6xl mx-auto text-lg mb-10">
          {bottomline}
        </p>
      </div>
    </section>
  );
}
