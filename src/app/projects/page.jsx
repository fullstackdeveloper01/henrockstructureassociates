'use client';

import { useState } from 'react';
import { projectData } from '../../data/projectData';
import ProjectCard from '../../components/ProjectCard';
import ProjectModal from '../../components/ProjectModal';

const PROJECTS_PER_PAGE = 9;

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectData.length / PROJECTS_PER_PAGE);
  const currentProjects = projectData.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Function to open modal with selected project
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };


  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <section
        className="relative h-[550px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/pages/about/about-banner.png')" }}
      >
        <div className="container mx-auto px-6 pt-40 relative z-10 h-full flex flex-col justify-start text-center lg:text-left">
          <div className="mb-16">
            <p className="uppercase text-3xl font-medium">Projects</p>
            <p className="text-md text-gray-300">Home &gt; Projects</p>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-10 lg:mt-24 mt-4">
            <div>
              <p className="text-lg tracking-wide uppercase text-white mb-2">Our Projects</p>
              <h1 className="text-3xl md:text-5xl font-normal leading-tight mb-4">
                Our Latest <br />
                <span className="text-white font-bold text-4xl md:text-6xl">Projects</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Projects */}
      <section className="bg-white pt-4 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-1 gap-5 px-6">
          <div>
            <p className="text-gray-700 text-sm leading-relaxed mb-0">
              Below you’ll see our best industrial projects. We are providing never-ending customer support and guarantee a very high level of satisfaction for our clients. If you have a question don’t hesitate to email us at{' '}
              <a href="mailto:hsa@henrockstructureassociates.com" className="text-orange-600">
                hsa@henrockstructureassociates.com
              </a>{' '}
              for more details.
            </p>
          </div>

          {/* Project Cards */}
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center mt-10 space-y-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 text-sm rounded border ${
                      currentPage === i + 1
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>

              <p className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectsPage;
