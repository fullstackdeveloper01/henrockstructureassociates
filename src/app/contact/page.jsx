'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone.trim() && !/^\+?[0-9\s\-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!agree) newErrors.agree = "You must agree to data collection";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          companyName: '',
          subject: '',
          phone: '',
          message: '',
        });
        setAgree(false);
        setErrors({});
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong while submitting.');
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Contact Us | Experts in Structural Steel Structures</title>
        <meta
          name="description"
          content="Get in touch with Henrock Structure Associates for reliable solutions in structural steel structures. We're here to support your construction needs."
        />
        <meta
          name="keywords"
          content="Structural Steel Structures"
        />
      </Head>

      {/* Banner Section */}
      <section className="relative lg:h-[550px] h-auto bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/assets/pages/about/about-banner.png')" }}
      >
        <div className="container mx-auto px-6 lg:pt-40 pt-20 pb-20 lg:pb-0 relative z-10 h-full flex flex-col justify-start text-center lg:text-left">
          <div className="mb-16">
            <p className="uppercase text-3xl font-medium">Contact Us</p>
            <p className="text-md text-gray-300">Home &gt; Contact Us</p>
          </div>
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:mt-24 mt-4">
            <div>
              <p className="text-lg tracking-wide uppercase text-white mb-2">Get in touch</p>
              <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-4">
                Engineering for Strength. <br />
                <span className="text-white font-bold text-4xl md:text-6xl">BIM for Precision</span>
              </h1>
            </div>

            <div className="relative">
              <div
                className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 lg:absolute right-0"
                style={{ bottom: '-42rem' }}
              >
                <h2 className="text-2xl font-semibold mb-2 text-black">Send Us Message!</h2>
                <p className="text-gray-600 mb-6">
                  Please fill out the request for quote form below and our expert team will get back to you shortly.
                </p>

                <form className="space-y-8 text-left" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g john doe"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g john@gmail.com"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Add the other fields here */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g steel RCC"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g +1 852-963-7415"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-start mt-4">
                    <input
                      type="checkbox"
                      id="dataConsent"
                      className="mr-2 mt-1"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                    />
                    <label htmlFor="dataConsent" className="text-sm text-gray-600">
                      I agree that my data is collected and stored.
                    </label>
                  </div>
                  {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Description Section */}
        <section className="bg-white pt-4 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-6">
            <div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                <Link href="/" className="text-orange-600">Henrock Structure</Link> crafts innovative solutions for steel factories and industrial 
                plants, ensuring strength and reliability in every project.
            </p>
            <img
                src="/assets/pages/contact/contact.png"  // Assuming the image is in the 'public' folder
                alt="Structure Glass"
                className="w-full hidden lg:block"
            />
            </div>
        </div>
        </section>

      {/* address Section */}
      <section className="address-wrap py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.38a2 2 0 011.414.586l2.707 2.707a1 1 0 01.293.707V9a1 1 0 01-.293.707L7.414 14.707A2 2 0 006 16.414V18a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                    </svg>
                  ),
                  title: "Phone",
                  content: "+91 9201592348,\n+91-9201592349"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
                    </svg>
                  ),
                  title: "Email",
                  content: "hsa@henrockstructureassociates.com"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
                    </svg>
                  ),
                  title: "Address",
                  content: "112, First Floor, Swadesh Bhawan,\nPress Complex, AB Road, Indore."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-orange-500 text-white p-6 flex flex-col gap-4 shadow-md"
                  style={{
                    clipPath: 'polygon(20px 0%, 100% 0%, 100% 100%, calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
                    WebkitClipPath: 'polygon(20px 0%, 100% 0%, 100% 100%, calc(100% - 20px) 100%, 0% 100%, 0% 20px)'
                  }}
                >
                  <div className="bg-orange-300 w-10 h-10 flex items-center justify-center rounded">
                    {item.icon}
                  </div>
                  <div className="whitespace-pre-line">
                    <p className="text-sm font-medium uppercase tracking-wide">{item.title}</p>
                    <p className="font-semibold text-base">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Map Section */}
        <section className="map-wrapper py-6">
            <div className="container mx-auto">
              <div style={{
                textDecoration: 'none',
                overflow: 'hidden',
                maxWidth: '100%',
                width: '100%',
                height: '500px'
                }}>
                    <div id="display-google-map" style={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '100%'
                    }}>
                        <iframe
                        title="Google Map"
                        style={{ height: '100%', width: '100%', border: 0 }}
                        frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?q=112,+First+Floor,+Swadesh+Bhawan,++Press+Complex,+AB+Road,+Indore.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ContactPage;
