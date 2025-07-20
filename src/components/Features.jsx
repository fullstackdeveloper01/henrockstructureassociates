'use client'
import Image from 'next/image'

export default function Features({ activeIndex }) {
  const features = [
    {
      image: "/assets/katana.png",
      title: <>BIM <br /> Services</>,
      desc: <>Our Building Information Modeling (BIM) division delivers integrated digital solutions across the construction lifecycle.</>,
    },
    {
      image: "/assets/robot-orange.png",
      title: <>Structural Design <br /> (Rcc, Steel & Wood)</>,
      desc: <>We provide end-to-end structural design solutions using Indian and international codes.</>,
    },
    {
      image: "/assets/business.png",
      title: <>PEB <br /> Design</>,
      desc: <>Comprehensive design services for Pre-Engineered Buildings (PEB), optimized for functionality, cost, and constructability.</>,
    },
    {
      image: "/assets/rebar-icon.png",
      title: <>Rebar Detailing That Delivers <br /> Faster Pours, Fewer Errors, Greater Strength</>,
      desc: <>We prevent reinforcement conflicts before they happen, saving time and improving the resilience of your concrete under stress, load, and time.</>,
    },
  ];

  return (
    <div className="relative z-20 -mt-20 px-6 md:px-20 grid md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
      {features.map((feature, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${isActive ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
          >
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 relative">
                <Image
                  src={feature.image}
                  alt={`Feature ${idx + 1}`}
                  fill
                  className={`object-contain transition ${isActive ? 'filter brightness-0 invert' : ''}`}
                  sizes="40px"
                />
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-2" data-aos="fade-up" data-aos-delay="200">
              {feature.title}
            </h3>
            <p className="text-sm" data-aos="fade-up" data-aos-delay="200">
              {feature.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
