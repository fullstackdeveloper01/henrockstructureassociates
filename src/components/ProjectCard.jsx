// components/ProjectCard.jsx
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="relative rounded-xl overflow-visible shadow-md bg-white cursor-pointer group transition-transform hover:-translate-y-1 mb-6">
      {/* Image and overlay */}
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500} // Adjust width and height according to your design
          height={300}
          className="w-full h-full object-cover"
        />

        {/* Hover dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <button
            onClick={onClick}
            className="bg-white text-black font-medium px-5 py-3 rounded-md shadow hover:bg-gray-100 transition z-20 text-sm"
          >
            View Detail
          </button>
        </div>
      </div>

      {/* Floating bottom info card */}
      <div className="absolute left-4 right-4 -bottom-6 z-20 bg-white px-4 py-3 rounded-xl shadow-md">
        <p className="font-semibold text-gray-900 text-base leading-tight">{project.title}</p>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 22s8-4.5 8-10A8 8 0 104 12c0 5.5 8 10 8 10z"
            />
          </svg>
          {project.location}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
