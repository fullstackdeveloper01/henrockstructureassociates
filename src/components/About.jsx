'use client'

import { FaBullseye, FaEye } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 text-gray-800">
      <div className="max-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Column - About Us Text */}
        <div className="lg:col-span-1 space-y-6">
          <p className="text-orange-600 font-semibold" data-aos="fade-up" data-aos-delay="200">
            ● About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up" data-aos-delay="200">
            Who We Are
          </h2>
          <p className="text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="200">
            Henrock Structure Associates is a multi‑disciplinary consultancy blending{" "}
            <Link href="/services/structural-designs" className="text-orange-600">
              structural engineering
            </Link>{" "}
            and digital construction expertise. We specialize in RCC and steel structural design, high-precision steel and rebar detailing, connection engineering, and complete BIM and VDC services.
          </p>

          <p className="text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="200">
            With proven experience across India, the U.S., and international markets, our experts bring deep technical knowledge backed by globally recognized standards including AISC, IS, and Eurocode. Our advanced workflows are built around quality, code compliance, and constructability—ensuring every detail supports practical execution on-site.
          </p>

          <p className="text-gray-600 text-justify" data-aos="fade-up" data-aos-delay="200">
            Through our dedicated{" "}
            <Link href="/services/bim-modeling" className="text-orange-600">
              BIM Services
            </Link>{" "}
            division, we empower architects, engineers, developers, and contractors with highly collaborative models, 4D sequencing, cost-aligned 5D BIM, and as-built digital twins. These solutions reduce rework, strengthen coordination, and drive faster approvals—keeping your project efficient, accurate, and fully aligned from the start.
          </p>

          <Link href="/about">
            <button
              className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              About us
            </button>
          </Link>
        </div>

        {/* Center Column - 3D Image */}
        <div className="lg:col-span-1 flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/assets/about.png"
            alt="3D Building Model"
            width={400}
            height={400}
            className="w-full max-w-md"
          />
        </div>

        {/* Right Column - Vision & Mission */}
        <div className="lg:col-span-1 space-y-12">
          {/* Vision */}
          <div className="pb-6">
            <div className="flex items-center mb-5">
              <Image
                src="/assets/vision.png"
                alt="Vision"
                width={40}
                height={40}
                className="mt-1"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <h3 className="text-xl font-bold ml-4" data-aos="fade-up" data-aos-delay="200">
                Vision
              </h3>
            </div>
            <hr />
            <p className="text-gray-600 mt-4" data-aos="fade-up" data-aos-delay="200">
              To become the global partner of choice for innovative, cost‑effective, and reliable structural engineering and digital construction services.
            </p>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center mb-5">
              <Image
                src="/assets/mission.png"
                alt="Mission"
                width={40}
                height={40}
                className="mt-1"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <h3 className="text-xl font-bold ml-4" data-aos="fade-up" data-aos-delay="200">
                Mission
              </h3>
            </div>
            <hr />
            <p className="text-gray-600 mt-4" data-aos="fade-up" data-aos-delay="200">
              To empower builders, fabricators, and developers with engineering excellence that adheres to the highest international standards and delivers measurable value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
