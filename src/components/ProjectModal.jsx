'use client'; // Make sure this is a client component in Next.js 13+

import Image from 'next/image';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // If no project, return null (modal should be hidden)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-6xl rounded-2xl shadow-lg block xl:flex lg:flex overflow-hidden relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT: Image */}
        <div className="lg:w-1/2 xl:w-1/2 w-full relative">
          <Image
            src={project.image}
            alt={project.title}
            width={500}  // Adjust as needed
            height={300} // Adjust as needed
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="lg:w-1/2 xl:w-1/2 w-full p-10 relative flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-12">{project.title || '---'}</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-normal text-sm text-gray-500">Client</p>
              <p className="font-bold text-xl text-black">{project.client || '---'}</p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Area</p>
              <p className="font-bold text-xl text-black">{project.area || '---'}</p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Location</p>
              <p className="font-bold text-xl text-black">{project.location || '---'}</p>
            </div>
            <div>
              <p className="font-normal text-sm text-gray-500">Structure</p>
              <p className="font-bold text-xl text-black">{project.structure || '---'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
