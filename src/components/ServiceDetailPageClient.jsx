// src/components/ServiceDetailPageClient.jsx
'use client'; // This must be the very first line

import Link from 'next/link';
import HenrockLeads from '../components/pages/HenrockLeads';
import IndustriesSlider from "../components/pages/IndustriesSlider";

// This component receives the 'service' data as a prop
const ServiceDetailPageClient = ({ service }) => {
  if (!service) {
    // This case should ideally not be reached if the server component handles no-found logic
    return <div className="text-center mt-10">Service data not provided.</div>;
  }

  return (
    <div>
      {/* Breadcrumb + Header */}
      <section
        className="relative bg-cover bg-center h-96 text-white bg-no-repeat"
        style={{
          backgroundImage: `url(${service.bgImage})`
        }}
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center px-6">
          <div className="container mx-auto">
            <div>
              <h1 className="text-3xl font-bold">Services</h1>
              <p className="text-sm">
                <Link href="/" className="hover:underline">Home</Link> &gt;
                <Link href="/services" className="hover:underline">Services</Link> &gt;
                {service.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-wrapper py-10 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="md:col-span-3 lg:pr-28 pr-0">
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">{service.heading}</h2>
              {service.description.map((para, index) => (
                <p
                  key={index}
                  className="text-sm text-justify text-gray-500 leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="md:col-span-2 w-full lg:w-1/2 m-auto md:hidden lg:block">
              <img
                src={service.image}
                alt={service.title}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Henrock Leads */}
      <section className="leading-wrapper py-10 px-4">
        <div className="container mx-auto">
          <HenrockLeads serviceId={service.id} />
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        className="text-white px-4"
        style={{ backgroundImage: "url('/assets/pages/services/slider-bg.png')" }}
      >
        <div className="container mx-auto">
          <IndustriesSlider
            title={service.industriesTitle}
            description={service.industriesDescription}
            industries={service.industries}
            accentColor={service.accentColor}
            bottomline={service.industriesBottomline}
          />
        </div>
      </section>

      {/* Contact & CTA */}
      {service.contactSection && (
        <section className="bg-gray-100 py-10 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="md:col-span-3 lg:pr-28 pr-0">
                <h4 className="text-2xl font-bold mb-6">
                  <span dangerouslySetInnerHTML={{ __html: service.contactSection.heading }} />
                </h4>
                <p className="text-sm text-justify text-gray-500 leading-relaxed mb-5">
                  {service.contactSection.description}
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-5">
                  {service.contactSection.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-justify text-black leading-relaxed"
                    >
                      <strong>{point.title}</strong>{" "}
                      <span className="text-gray-500">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <img
                  src={service.contactImage}
                  className="w-full md:hidden lg:block"
                  alt="Contact"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetailPageClient;