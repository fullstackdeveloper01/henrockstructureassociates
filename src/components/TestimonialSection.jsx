'use client';

import React, { useState, useRef } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const testimonials = [
  {
    image: '/assets/testimonial/rahul.png',
    quote:
      'Henrock’s BIM expertise helped us meet an aggressive 4-month deadline. Their seamless conversion from CAD to a clash-free model ensured timely delivery without design conflicts.',
    name: 'Rahul Mehra',
    title: 'Senior Architect',
  },
  {
    image: '/assets/testimonial/priya.jpg',
    quote:
      'Thanks to Henrock, we were able to deliver a highly coordinated structural model with no rework. Their precision and project understanding exceeded our expectations.',
    name: 'Priya Desai',
    title: 'Construction Lead',
  },
  {
    image: '/assets/testimonial/amit.jpg',
    quote:
      'Henrock’s team brought clarity to a very complex design process. Their proactive coordination helped us save both time and cost on-site.',
    name: 'Amit Bansal',
    title: 'Project Director',
  },
  {
    image: '/assets/testimonial/sneha.jpg',
    quote:
      'We partnered with Henrock for BIM services and were impressed by their technical finesse. Their model was clean, accurate, and ready for execution.',
    name: 'Sneha Kapoor',
    title: 'Design Consultant',
  },
  {
    image: '/assets/testimonial/karan.jpg',
    quote:
      'Henrock has become our go-to BIM partner. Their responsiveness and eye for structural detail helped us deliver confidently to our client.',
    name: 'Karan Joshi',
    title: 'Project Engineer',
  },
  {
    image: '/assets/testimonial/meera.jpg',
    quote:
      'From CAD drawings to a coordinated structural model, Henrock handled it all with professionalism and speed. A dependable and skilled team.',
    name: 'Meera Shah',
    title: 'Technical Manager',
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#F9F9F9] py-12 px-6 md:px-16 lg:px-20 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex-1 max-w-md">
          <p className="text-sm text-orange-600 font-semibold mb-4">● Our Testimonial</p>

          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ))}
          </div>

          <p className="text-lg text-gray-800 font-normal mb-1">
            <span className="underline font-bold">99.9% Customer Satisfaction</span> based on <br />
            500+ reviews and 1,000 Completed Projects.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end px-12 lg:px-2">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full max-w-3xl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 min-w-0">
                  {/* Image */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={160}
                    height={160}
                    className="rounded-md object-cover"
                  />

                  {/* Quote */}
                  <div className="text-center lg:text-left flex-1 px-8 w-80 md:w-full md:px-2">
                    <FaQuoteLeft className="text-blue-700 text-2xl mb-2 mx-auto lg:mx-0" />
                    <p className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
                      “{testimonial.quote}”
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>{testimonial.name}</strong> &bull; {testimonial.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`cursor-pointer transition-all duration-300 rounded-sm ${
                  index === activeIndex ? 'w-8 h-0.5 bg-black' : 'w-4 h-0.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
