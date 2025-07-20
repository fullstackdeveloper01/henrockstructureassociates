'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from '../../data/ServicesData'; // Make sure this path is correct

const HenrockLeads = ({ serviceId = "bim-modeling" }) => {
  const service = servicesData.find(service => service.id === serviceId);
  const featureTab = service?.advantages.find(item => item.type === "feature-tabs");
  const features = featureTab?.features || [];

  const [activeIndex, setActiveIndex] = useState(0);

  if (!service) {
    return <p className="text-red-500">Service not found</p>;
  }

  return (
    <section className="bg-white">
      {/* Title and Intro */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:mb-6">
        <div className="md:basis-[45%]">
          <h2
            className="text-2xl text-orange-600 font-normal mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {service.name}
          </h2>
        </div>
        <div className="md:basis-[55%]">
          <p className="text-sm text-justify text-gray-500 leading-relaxed mb-4">
            {service?.intro || "No introduction available for this service."}
          </p>
        </div>
      </div>

      {/* Feature Tabs */}
      {features.length > 0 && (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:mb-6">
          {/* Tabs */}
          <div className="md:basis-[45%]">
            <ul>
              {features.map((f, i) => (
                <li
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer text-xl font-medium transition-all duration-300 mb-6 ${
                    i === activeIndex
                      ? "text-blue-700 font-semibold"
                      : "text-gray-400 hover:text-blue-500"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="mr-2 text-gray-300 font-bold">0{i + 1}/</span>
                  <span>{f.title}</span>
                  {i === activeIndex && (
                    <span className="ml-1 inline-block">↗</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Content */}
          <div className="md:basis-[55%]">
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
                  <img
                    src={features[activeIndex]?.image}
                    alt={features[activeIndex]?.title}
                    className="w-full md:w-1/2 h-auto rounded-md object-cover"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="200">
                      {features[activeIndex]?.description}
                    </h3>
                    {Array.isArray(features[activeIndex]?.subtext) &&
                      features[activeIndex].subtext.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-600 mb-2 text-justify"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {para}
                        </p>
                      ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HenrockLeads;
