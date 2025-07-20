'use client'; // If using App Router

import Image from 'next/image';

export default function BlogSection() {
  const blogPosts = [
    {
      image: "/assets/blog/bim.jpg",
      category: "BIM Integration",
      date: "March 27, 2025",
      title: "Revolutionizing Structural Engineering with BIM Integration",
      description:
        "Explore how Henrock Structure Associates is transforming traditional engineering workflows through advanced Building Information Modeling (BIM). From clash detection to 4D scheduling, learn how BIM improves project accuracy, collaboration, and cost-efficiency.",
      link: "https://henrockstructureassociates.com/blog/#",
    },
    {
      image: "/assets/blog/detailing.jpg",
      category: "Steel Detailing",
      date: "May 13, 2025",
      title: "The Power of Precision: Steel Detailing at Henrock",
      description:
        "Detailing is where design meets execution. Learn how Henrock's high-precision steel detailing ensures fabrication-ready drawings, minimizing site errors and optimizing material use.",
      link: "https://henrockstructureassociates.com/blog/#",
    },
    {
      image: "/assets/blog/steel-rcc.jpg",
      category: "Structural System",
      date: "Jan 20, 2025",
      title: "RCC vs. Steel: Choosing the Right Structural System",
      description:
        "RCC or Steel? Discover how Henrock helps developers make the right structural choices based on cost, load, speed, and sustainability—backed by deep domain expertise.",
      link: "https://henrockstructureassociates.com/blog/#",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="w-full mx-auto">
        <p className="text-sm text-orange-600 font-semibold mb-2" data-aos="fade-up" data-aos-delay="200">
          ● Blogs
        </p>
        <h2 className="text-3xl font-bold mb-10">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="w-full h-60 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  priority={index === 0}
                />
              </div>
              <div className="mt-4 text-xs text-gray-500 flex gap-2 items-center">
                <span className="uppercase tracking-wide">{post.category}</span>
                <span className="text-gray-400">•</span>
                <time>{post.date}</time>
              </div>
              <h3 className="text-2xl font-semibold mt-2 text-black">{post.title}</h3>
              <p className="text-sm text-gray-600 font-normal mt-2 line-clamp-3">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-black border-b border-black w-max hover:text-orange-600 hover:border-orange-600 transition-colors"
              >
                Read more &nbsp;↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
