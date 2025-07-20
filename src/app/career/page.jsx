'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const featureCards = [
  {
    title: "Career Growth Opportunities",
    desc: "Unlock your potential with clear paths for advancement and continuous learning.",
  },
  {
    title: "Industry-Leading Facilities",
    desc: "Work in cutting-edge spaces designed to foster innovation and productivity.",
  },
  {
    title: "Collaborative Work Culture",
    desc: "Thrive in a team-oriented environment where ideas are shared and celebrated.",
  },
  {
    title: "Competitive Benefits Package",
    desc: "Enjoy comprehensive benefits that support your well-being and future.",
  },
];

const CareerPage = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    jobRole: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.education) newErrors.education = "Please select education";
    if (!formData.experience) newErrors.experience = "Please select experience";
    if (!formData.jobRole) newErrors.jobRole = "Please select job role";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!file) {
      newErrors.cv = "CV file is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    if (!file) {
      setErrors((prev) => ({ ...prev, cv: "CV file is required" }));
      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("education", formData.education);
    data.append("experience", formData.experience);
    data.append("jobRole", formData.jobRole);
    data.append("message", formData.message);
    data.append("cv", file);

    try {
      const res = await fetch("https://henrock-backend.onrender.com/api/career", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          education: "",
          experience: "",
          jobRole: "",
          message: "",
        });
        setFile(null);
        setErrors({});
        alert("Form submitted successfully!");
      } else {
        // handle server-side errors if needed
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // handle client-side errors if needed
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Careers | BIM Services | Henrock Structure Associates</title>
        <meta
          name="description"
          content="Explore career opportunities at Henrock Structure Associates. Join our expert team in delivering top-tier BIM services for innovative construction solutions."
        />
        <meta name="keywords" content="BIM Services" />
      </Head>

      {/* Banner Section */}
      <section
        className="relative h-[550px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/pages/about/about-banner.png')" }}
      >
        <div className="container mx-auto px-6 pt-40 relative z-10 h-full flex flex-col justify-start text-center lg:text-left">
          <div className="mb-16">
            <p className="uppercase text-3xl font-medium">Career</p>
            <p className="text-md text-gray-300">Home &gt; Career</p>
          </div>
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:mt-24 mt-4">
            <div className="relative hidden lg:block">
              <img
                src="/assets/pages/career/career3.png"
                alt="Structure Glass"
                className="rounded-xl border-8 border-white shadow-2xl w-full absolute right-0"
                style={{ bottom: '-43rem', height: '51rem' }}
              />
            </div>
            <div>
              <p className="text-lg tracking-wide uppercase text-white mb-2">Introductions</p>
              <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-4">
                Join Our Legacy<br />
                <span className="text-white font-bold text-4xl md:text-6xl">Of Structure Associates</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-4 pb-10 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-6">
          <div className="hidden md:block" />
          <div className="md:hidden mb-8">
            <img
              src="/assets/pages/career/career3.png"
              alt="Structure Glass"
              className="rounded-xl border-8 border-white shadow-2xl w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((item, idx) => (
              <div key={idx} className="bg-orange-500 text-white px-6 py-14 rounded-lg relative shadow-lg">
                <div className="absolute top-4 left-4 bg-orange-300 p-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Submission Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow border">
            <h2 className="text-xl font-semibold mb-6">Submit Your Detail</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full border border-gray-300 px-4 py-2 rounded"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <select
                      className="w-full border border-gray-300 px-4 py-2 rounded text-gray-500"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    >
                      <option value="">Select Education</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>
                      <option>Diploma</option>
                    </select>
                    {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      className="w-full border border-gray-300 px-4 py-2 rounded text-gray-500"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="">Select experience</option>
                      <option>0-1 year</option>
                      <option>1-3 years</option>
                      <option>3+ years</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                  </div>

                  <div>
                    <select
                      className="w-full border border-gray-300 px-4 py-2 rounded text-gray-500"
                      value={formData.jobRole}
                      onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })}
                    >
                      <option value="">Applying for job</option>
                      <option>Design Engineer</option>
                      <option>BIM Modeler</option>
                      <option>Project Manager</option>
                    </select>
                    {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <textarea
                    placeholder="Write your message"
                    rows={3}
                    className="w-full border border-gray-300 px-4 py-2 rounded resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div
                  {...getRootProps()}
                  className={`w-full h-28 border-2 border-dashed rounded flex flex-col justify-center items-center text-center text-sm text-gray-500 cursor-pointer ${
                    isDragActive ? "bg-blue-50" : "bg-gray-50"
                  }`}
                >
                  <input {...getInputProps()} />
                  <img src="/assets/drag-drop.png" alt="Upload Icon" className="w-6 h-6 mb-1" />
                  {file ? (
                    <p className="text-green-600">{file.name}</p>
                  ) : (
                    <p>
                      <strong>Drag & Drop CV here</strong>
                      <br />
                      Only PDF and Word files allowed
                    </p>
                  )}
                </div>
                {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleSubmit}
                className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition"
              >
                Send Your CV
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-700">
            <p className="mb-2 font-medium">
              Discover exciting career opportunities. Join our team and help us create impactful solutions.
            </p>
            <p>
              Contact email:{" "}
              <a
                href="mailto:hsa@henrockstructureassociates.com"
                className="text-orange-600 font-semibold"
              >
                hsa@henrockstructureassociates.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
