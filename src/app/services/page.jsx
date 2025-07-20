// Example from src/app/services/page.jsx (the overview page)
import Link from 'next/link';
import servicesData from '../../data/ServicesData'; // Adjust path

export default function ServicesOverviewPage() {
  return (
    <div>
      {servicesData.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          {/* Link to the individual service page using its ID as the slug */}
          <Link href={`/services/${service.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}