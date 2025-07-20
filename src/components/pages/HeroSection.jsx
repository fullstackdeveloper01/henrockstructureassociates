import React from 'react';

const HeroSection = ({ service }) => {
  return (
    <section
      className="relative bg-cover bg-center h-96 text-white bg-no-repeat"
      style={{ backgroundImage: `url(${service.bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 h-full flex items-center px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:basis-[45%]">
            <h1 className="text-4xl font-bold">{service.heading}</h1>
            <p className="text-sm mt-4">{service.metaDescription}</p>
          </div>
          <div className="md:basis-[45%] hidden md:block">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
