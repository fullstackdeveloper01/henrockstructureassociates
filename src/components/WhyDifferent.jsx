"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const services = [
  {
    title: "Structural Design",
    subtitle: "(RCC, Steel & wood)",
    description:
      "At Henrock, we design safe, efficient structures tailored to your project needs. Whether it’s reinforced concrete frames, steel skeletons, or timber structures, our engineers follow Indian and international codes for optimal safety and strength. From foundations to roof canopies, every element is designed with durability, code-compliance, and ease of construction in mind. Our designs balance load distribution, material efficiency, and local constructability—delivering frameworks that are strong, cost-effective, and reliable.",
    image: "/assets/service-slide.png",
  },
  {
    title: (
      <>
        Steel Connection <br /> Design
      </>
    ),
    subtitle: "",
    description:
      "Strong buildings start with stronger connections. We engineer strong, fail-safe connections that hold your structure together under all loading conditions. Every weld, bolt, and plate is designed and verified per AISC, Eurocode, and IS standards. Our team uses advanced software such as IDEA StatiCa to analyze plate dimensions, bolt groups, and weld arrangements—ensuring each connection delivers maximum safety and structural integrity. Whether bolted, welded, or hybrid, we ensure that each joint performs under stress while supporting clear erection and fabrication workflows.",
    image: "/assets/service-slide1.png",
  },
  {
    title: (
      <>
        Steel <br /> Detailing
      </>
    ),
    subtitle: "",
    description:
      "Our steel detailing team transforms 3D models into precise fabrication documents using industry-leading platforms like Tekla Structures. We deliver General Arrangement drawings with accurate dimensions, single-part and assembly plans, anchor bolt layouts, and DSTV/NC files for CNC machines. Every deliverable is optimized to eliminate site confusion, reduce shop-floor bottlenecks, and enable faster, error-free fabrication. Our detailing approach improves alignment across stakeholders—ensuring that what’s built in the shop matches what’s expected in the field.",
    image: "/assets/service-slide2.png",
  },
  {
    title: "Pre-Engineered Buildings Design",
    subtitle: "(PEB)",
    description:
      "We design pre-engineered steel building systems that accelerate timelines without sacrificing quality. Our services include design of PEB frames, wall cladding systems, roofing components, and secondary members—all optimized for rapid fabrication and field assembly. Our CNC-ready, shop-level documentation ensures precise fit-up, minimized site waste, and reduced construction downtime.",
    image: "/assets/service-slide3.png",
  },
  {
    title: (
      <>
        Rebar <br /> Detailing
      </>
    ),
    subtitle: "",
    description:
      "With Henrock’s rebar detailing services, structural integrity starts in the planning phase. We provide precise 2D and 3D rebar drawings that cover bar shapes, hooks, lap lengths, spacing, and cover checks—designed to ACI and IS codes. Our bar bending schedules and shop drawings streamline procurement, speed up fabrication, and reduce placement errors on-site. These deliverables ensure proper load transfer, prevent cracking, and maintain the durability and safety of your concrete structures.",
    image: "/assets/service-slide4.png",
  },
  {
    title: (
      <>
        Project <br /> Management
      </>
    ),
    subtitle: "",
    description:
      "Complex engineering projects demand tight control and proactive coordination. Our project managers oversee all stages—from kickoff to handover—ensuring that scopes, timelines, and budgets stay on track. With daily updates, milestone tracking, and risk mitigation plans, we align internal teams, vendors, and clients around shared goals. Our process is transparent, data-driven, and collaborative—ensuring smooth execution and timely delivery on every project.",
    image: "/assets/service-slide5.png",
  },
  {
    title: "BIM Services",
    subtitle: "",
    description: [
      "Our BIM division helps you visualize, coordinate, and execute your project with unmatched accuracy. We create fully clash-free 3D models that align structural, architectural, and MEP disciplines from the outset. Our 4D BIM solutions add construction sequencing for accurate project timelines, while 5D BIM integrates material quantities and budgeting. We also develop VR-ready walkthroughs and as-built digital twins for stakeholder buy-in and long-term facility management. ",
      "Our BIM solutions reduce miscommunication, minimize change orders, and ensure that all teams—from design to execution—are working from a single, accurate source of truth."
    ],
    image: "/assets/service-slide6.jpeg",
  },
];

export default function ServicesSlider() {
  return (
    <section className="bg-blue-900 text-white px-8 md:px-12 lg:px-20 py-12 relative">
      <div className="flex flex-col md:flex-column lg:flex-row gap-8">
        <div className="md:w-full lg:w-5/12">
          <p className="text-sm">● Our Service</p>
          <h2 className="text-3xl font-bold mt-4">What Sets Us <br /> Apart</h2>
          <p className="mt-4 text-sm text-justify">
            At Henrock Structure Associates, we combine technical rigor with a client‑first mindset to surpass expectations at every turn. Our advanced BIM workflows integrate seamlessly with precise shop drawings and robust structural designs. Every solution we deliver is practical to build, cost-effective to fabricate, and structurally secure. We make sure your designs are not just safe on paper—but built to perform on-site.
          </p>
          <p className="mt-4 text-sm text-justify">
            Our team brings together advanced BIM workflows, high-accuracy steel detailing, and proven RCC and steel design methods. Every detail is reviewed with care, accuracy, and commitment to code compliance.
          </p>
          <p className="mt-4 text-sm text-justify">
            We don’t just deliver drawings—we offer solutions that improve coordination, reduce risks, and support faster approvals. From project kickoff to final handover, we maintain the highest standards in quality, communication, and execution. That’s why builders, contractors, and architects trust us to deliver projects that succeed.
          </p>
          <div className="flex gap-2 mt-6">
            <button className="custom-prev bg-white text-black p-3 shadow hover:bg-gray-200">
              <Image src="/assets/arrow-left.png" alt="Left Arrow" width={24} height={24} />
            </button>
            <button className="custom-next bg-white text-black p-3 shadow hover:bg-gray-200">
              <Image src="/assets/arrow-right.png" alt="Right Arrow" width={24} height={24} />
            </button>
          </div>
        </div>

        <div className="md:w-full lg:w-7/12">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="pl-0 border-l-0 md:pl-10 md:border-l md:border-white flex flex-col justify-between h-[570px]">
                  <div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    {service.subtitle && <p className="text-md font-medium mb-4">{service.subtitle}</p>}
                    {Array.isArray(service.description) ? (
                      service.description.map((desc, i) => (
                        <p key={i} className="text-sm mt-2 text-justify">{desc}</p>
                      ))
                    ) : (
                      <p className="text-sm mt-2 text-justify">{service.description}</p>
                    )}
                  </div>
                  <Image
                    src={service.image}
                    alt="Service Image"
                    width={400}
                    height={160}
                    className="mt-4 w-full h-40 object-cover rounded"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}