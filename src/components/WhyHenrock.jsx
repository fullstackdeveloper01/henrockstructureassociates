'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Proven Expertise",
    description: (
      <>
        Proven expertise in executing complex, multidisciplinary BIM and structural engineering projects
      </>
    ),
    subtext: [
      `Henrock brings decades of combined experience in RCC and steel structural design, delivering robust engineering solutions across sectors. Our proven track record spans complex builds and high-performance structures.`,
    ],
    image: "/assets/whychooseus/about-01.jpg",
  },
  {
    title: "Seamless Integration",
    description: (
      <>
        Seamless integration of advanced technologies like VR, IoT, and Digital Twins
      </>
    ),
    subtext: [
      `We ensure smooth collaboration with architects, contractors, and fabricators through fully coordinated BIM workflows and clash-free designs, minimizing rework and maximizing efficiency on-site.`,
    ],
    image: "/assets/whychooseus/about-02.jpg",
  },
  {
    title: "Scalable BIM consulting",
    description: (
      <>
        Scalable BIM consulting tailored to meet the demands of global construction workflows
      </>
    ),
    subtext: [
      `From small-scale developments to large infrastructure projects, our BIM services scale with your needs. Henrock empowers teams with smart modeling, data-rich coordination, and real-time project insights.`,
    ],
    image: "/assets/whychooseus/about-03.jpg",
  },
  {
    title: "Unmatched Quality, Precision",
    description: (
      <>
        Unmatched quality, precision, and fast turnaround, powered by industry-leading tools
      </>
    ),
    subtext: [
      `Henrock is committed to delivering flawless detailing, accurate shop drawings, and precision-engineered connections, ensuring structural integrity and fabrication readiness at every stage.`,
    ],
    image: "/assets/whychooseus/about-04.jpg",
  },
  {
    title: "Flexible deployment models",
    description: (
      <>
        Let’s shape the future of construction—together—with smarter, more collaborative digital delivery.
      </>
    ),
    subtext: [
      `Choose from on-demand support, dedicated teams, or hybrid engagement models. Henrock adapts to your project dynamics, timelines, and budget, ensuring agility without compromising on quality.`,
    ],
    image: "/assets/whychooseus/about-05.jpg",
  },
]

export default function FeatureTabsAnimated() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-16 lg:px-20">
      <div className="w-full mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        {/* Tabs */}
        <div>
          <p className="text-sm text-orange-600 font-semibold mb-6" data-aos="fade-up" data-aos-delay="200">
            ● Specialized Expertise
          </p>
          <ul>
            {features.map((f, i) => (
              <li
                key={i}
                onClick={() => setActiveIndex(i)}
                data-aos="fade-up"
                data-aos-delay={200 + i * 50}
                className={`cursor-pointer text-xl font-medium transition-all duration-300 mb-4 ${
                  i === activeIndex
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400 hover:text-blue-500"
                }`}
              >
                <span className="mr-2 text-gray-300 font-bold">0{i + 1}/</span>
                {f.title}
                {i === activeIndex && <span className="ml-1 inline-block">↗</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-6 w-full"
            >
              <div className="w-full md:w-1/3 rounded-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="200">
                  {features[activeIndex].description}
                </h3>
                {features[activeIndex].subtext.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-600 mb-3 text-justify"
                    data-aos="fade-up"
                    data-aos-delay={250 + idx * 50}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
