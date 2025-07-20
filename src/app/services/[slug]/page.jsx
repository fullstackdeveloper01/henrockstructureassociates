// src/app/services/[slug]/page.jsx
// NO 'use client' directive here - this is a Server Component

import servicesData from '../../../data/ServicesData'; // Ensure this path is correct
import ServiceDetailPageClient from '../../../components/ServiceDetailPageClient'; // Import the new client component

// 1. generateStaticParams: Tells Next.js which pages to build statically
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id, // Using service.id as the slug
  }));
}

// 2. generateMetadata: For SEO, a server-side function to set page metadata
export async function generateMetadata({ params }) {
  // Await params or wrap in Promise.resolve if you encounter the 'params should be awaited' error
  // The official docs often show direct destructuring, but this error implies a need for awaiting.
  const resolvedParams = await Promise.resolve(params); // Added this line
  const { slug } = resolvedParams; // Changed to use resolvedParams

  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Henrock Structure Associates',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: `${service.metaTitle || service.title} | Henrock Structure Associates`,
    description: service.metaDescription || service.description?.[0] || "Explore our services at Henrock Structure Associates.",
    keywords: service.metaKeywords || "Henrock, engineering, construction, services, BIM, structural design",
  };
}

// 3. ServicePage Component (now a Server Component)
export default async function ServicePage({ params }) { // Added 'async' keyword here
  // Await params or wrap in Promise.resolve if you encounter the 'params should be awaited' error
  const resolvedParams = await Promise.resolve(params); // Added this line
  const { slug } = resolvedParams; // Changed to use resolvedParams

  // Fetch data on the server side
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return <div className="text-center mt-10">Service not found.</div>;
  }

  // Pass the fetched service data to the Client Component
  return <ServiceDetailPageClient service={service} />;
}