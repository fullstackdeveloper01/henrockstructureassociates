'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="text-gray-800">
      {/* Banner Section */}
      <section
        className="relative h-[550px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/pages/about/about-banner.png')" }}
      >
        <div className="container mx-auto px-6 pt-40 h-full flex flex-col justify-start text-center lg:text-left">
          <div className="mb-16">
            <p className="uppercase text-3xl font-medium">About Us</p>
            <p className="text-md text-gray-300">Home &gt; About Us</p>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <p className="text-lg tracking-wide uppercase text-white mb-2">Who We Are</p>
              <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-4">
                Introduce <br />
                <span className="text-white font-bold text-4xl md:text-6xl">We Build Everything</span>
              </h1>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/assets/pages/about/who1.avif"
                alt="Structure Glass"
                width={708}
                height={531}
                className="rounded-xl border-8 border-white shadow-2xl absolute right-0"
                style={{ bottom: '-30rem' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white pt-4 pb-20 lg:px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-6">
          <div className="md:hidden mb-8">
            <Image
              src="/assets/pages/about/who1.avif"
              alt="Structure Glass"
              width={600}
              height={400}
              className="rounded-xl border-8 border-white shadow-2xl w-full"
            />
          </div>
          <div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <a href="/" className="text-orange-600">Henrock Structure Associates</a> is a multi-disciplinary structural engineering and digital construction consultancy specializing in RCC and steel structural design, connection engineering, high-precision steel detailing, and advanced BIM services. With deep expertise in industry-leading techniques, we deliver integrated solutions across India, the U.S., and global markets.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Our team adheres to international standards including AISC, IS, and Eurocode to ensure that every project is buildable, cost-effective, and code- compliant—whether industrial, commercial, or institutional. Through our dedicated BIM Services division, we offer end-to-end <a href="/services/bim-modeling" className="text-orange-600">Building Information Modeling (BIM)</a> and Virtual Design & Construction (VDC) solutions that empower architects, engineers, contractors, and developers to enhance coordination, reduce risk, and execute projects with greater precision and efficiency.
            </p>

        </div>
        </div>
      </section>

      {/* Angled Section */}
      <section className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 bg-orange-600 text-white px-8 py-10 relative clip-left">
          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We structure our services across three key phases—Design, Construction, and
            Operations—to provide seamless support throughout the entire project
            lifecycle.
          </p>
        </div>
        <div className="md:w-1/2 bg-blue-800 text-white px-8 py-10 relative clip-right">
          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Our portfolio includes projects in hospitality, commercial, healthcare,
            infrastructure, and large-scale industrial sectors, backed by deep domain
            expertise and a strong commitment to technology-driven transformation.
          </p>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 lg:pr-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Industry Leaders Choose Henrock Structure Associates</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">We are not just another structural detailing company—we are strategic partners trusted by global firms to handle critical project scopes under pressure. With over 1000+ projects delivered across sectors, our reputation is built on consistent excellence, precise engineering, and unmatched problem-solving agility.</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm md:text-base">
              <li>
                <h5 className="font-semibold text-black">Proven Structural Precision</h5> 
                <span className="font-normal text-gray-600 text-sm leading-relaxed">Our detailers and engineers combine software mastery with real-world logic to deliver    accurate, clash-free outputs that avoid field errors and reduce rework costs from day one.
                </span>
              </li>
              <li>
                <h5 className="font-semibold text-black">Industry-Specific Expertise</h5> 
                <span className="font-normal text-gray-600 text-sm leading-relaxed">From high-rises and infrastructure to manufacturing plants, our team understands sector-specific codes, constraints, and construction realities. We ensure our deliverables support safe, buildable execution..</span>
              </li>
              <li>
                <h5 className="font-semibold text-black">Future-Ready BIM Implementation</h5> 
                <span className="font-normal text-gray-600 text-sm leading-relaxed">We don’t just model—we coordinate, simulate, and help you plan better. Our BIM solutions integrate 4D timelines, cost data, and clash control for smoother construction outcomes.</span>
              </li>
              <li>
                <h5 className="font-semibold text-black">Scalable Intercontinental Delivery</h5> 
                <span className="font-normal text-gray-600 text-sm leading-relaxed">Whether you need a remote BIM team, project-based support, or ongoing modeling assistance—we plug in effortlessly and work across global time zones, codes, and platforms.</span>
              </li>
              <li>
                <h5 className="font-semibold text-black">Commitment to Speed & Consistency</h5> 
                <span className="font-normal text-gray-600 text-sm leading-relaxed">Tight deadlines don’t faze us. Our lean workflows, tool automation, and quality checks help us deliver ready-to-build drawings faster than industry standards—without compromising accuracy.</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] lg:h-[550px]">
              <Image
                src="/assets/pages/about/partner.png"
                alt="Why Partner Image"
                fill
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-500 flex items-center justify-center">
                <button className="w-12 h-8 bg-orange-500 rounded-full text-white shadow-lg">
                  ▶
                </button>
              </div>
            </div>
            <p className="mt-6 font-semibold text-sm md:text-base">
            We can deliver technically-sound, visually-precise, and construction-optimized models from concept to completion. <a href="/contact" className="text-orange-600">Contact us today!</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white pt-12 relative">
        <div className="relative block lg:flex items-start">
          <div className="hidden lg:block lg:w-5/12 relative z-0">
            <Image
              src="/assets/pages/about/what-we-do1.png"
              alt="What We Do"
              width={768}
              height={674}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-8/12 bg-orange-600 text-white lg:px-16 p-8 lg:py-32 lg:-ml-24 md:-mt-16 relative rounded-md">
            <p className="text-xs uppercase tracking-wide">What We Do</p>
            <h2 className="text-2xl font-normal leading-snug mb-4">
              Our Mission Is <br />
              <span className="text-4xl font-bold">Best In The Business!</span>
            </h2>
            <p className="mt-4 text-sm">
                To empower builders, fabricators, and developers through quality engineering that meets international standards.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className="mt-6 space-y-4">
              <div className="md:flex items-start gap-4">
                <Image
                  src="/assets/pages/about/mission.png"
                  alt="Mission"
                  width={56}
                  height={56}
                />
                <div>
                  <h3 className="font-semibold mb-2 text-base">OUR MISSION</h3>
                  <p className="text-sm">To empower builders, fabricators, and developers with engineering excellence that adheres to the highest international standards and delivers measurable value.</p>
                </div>
              </div>
              <div className="md:flex items-start gap-4">
                <Image
                  src="/assets/pages/about/vision.png"
                  alt="Vision"
                  width={56}
                  height={56}
                />
                <div>
                  <h3 className="font-semibold mb-2 text-base">OUR VISION</h3>
                  <p className="text-sm">To become the global partner of choice for innovative, cost‑effective, and reliable structural engineering and digital construction services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
