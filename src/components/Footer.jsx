'use client';

import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-12 pb-6 px-4 md:px-12 lg:px-20 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-b border-gray-600 pb-10">
        {/* Column 1 - Logo + Desc */}
        <div className="lg:col-span-2 md:col-span-2">
          <div className="mb-4">
            <Link href="/">
                <Image
                    src="/assets/logo/HSA-footerlogo.png"
                    alt="Footer Logo"
                    width={250}
                    height={100}
                />
            </Link>
          </div>
          <p className="text-white leading-relaxed mb-4 text-justify" data-aos="fade-up" data-aos-delay="200">
            <strong>Our Specialities:</strong><br />
            Building Information Modeling (BIM), 3D Modeling & Visualization, BIM
            Coordination & Clash Detection, Scan to BIM, Revit Modeling, Architectural and
            Structural BIM Services, BIM for Architecture, Engineering & Construction
            (AEC), BIM Implementation & Management, 4D & 5D BIM for Scheduling &
            Costing, BIM Consulting, Point Cloud & Laser Scanning, As-Built Modeling, BIM
            Content Creation, LOD (Level of Detail) Development, COBie & IFC Compliance,
            BIM for Facility Management, BIM Project Setup & Execution Planning, and
            BIM Training & Support
          </p>
          <h4 className="font-semibold mb-4 text-lg text-white" data-aos="fade-up" data-aos-delay="200">Follow Us</h4>
          <div className="flex space-x-4">
            <a
                href="https://www.facebook.com/people/Henrock-Structure-Associates/61576736635921/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                src="/assets/footer/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                />
            </a>

            <a
                href="https://www.instagram.com/henrockstructureassociates/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                src="/assets/footer/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                />
            </a>

            <a
                href="https://www.linkedin.com/company/henrock-structrue-associates/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                src="/assets/footer/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                />
            </a>
            </div>

        </div>

        {/* Column 2 - Quick Links */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold mb-4 text-lg text-white">Quick Links</h4>
          <ul className="text-white">
            <li className="mb-3"><Link href="/" className="hover:text-white">Home</Link></li>
            <li className="mb-3"><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li className="mb-3"><Link href="/project" className="hover:text-white">Projects</Link></li>
            <li className="mb-3">
              <a href="https://henrockstructureassociates.com/blog/#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blogs</a>
            </li>
            <li className="mb-3"><Link href="/career" className="hover:text-white">Career</Link></li>
            <li className="mb-3"><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold mb-4 text-lg text-white">Services</h4>
          <ul className="text-white">
            <li className="mb-3"><Link href="/services/bim-modeling" className="hover:text-white">BIM Services</Link></li>
            <li className="mb-3"><Link href="/services/pre-engineering" className="hover:text-white">Pre-Engineered Buildings</Link></li>
            <li className="mb-3"><Link href="/services/steel-detailing" className="hover:text-white">Steel Detailing</Link></li>
            <li className="mb-3"><Link href="/services/structural-designs" className="hover:text-white">Structural Design</Link></li>
            <li className="mb-3"><Link href="/services/steel-connection-design" className="hover:text-white">Steel Connection Design</Link></li>
            <li className="mb-3"><Link href="/services/rabar-detailing" className="hover:text-white">Rebar Detailing</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contacts */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold mb-4 text-lg text-white">Email Address</h4>
          <div className="mb-4 break-words">
            <a href="mailto:hsa@henrockstructureassociates.com" className="text-white block hover:underline">
              hsa@henrockstructureassociates.com
            </a>
          </div>
          <h4 className="font-semibold mb-2 text-lg text-white">Phone Number</h4>
          <a href="tel:+919201592348" className="text-white block hover:underline">+91 9201592348</a>
          <a href="tel:+919201592349" className="text-white block hover:underline">+91 9201592349</a>

          <h4 className="font-semibold mt-4 mb-2 text-lg text-white">Address</h4>
          <p className="text-white">
            112, First Floor, Swadesh Bhawan, L I G Square, Indore, Madhya Pradesh 452003
          </p>
        </div>

        {/* Column 5 - Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold mb-4 text-lg text-white">Newsletter</h4>
          <p className="text-white mb-4">
            Subscribe to our newsletters to receive latest news and updates.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 text-sm text-black"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4">
              Subscribe Now!
            </button>
            <h4 className="font-semibold mb-4 text-lg text-white mt-4">Location</h4>
            <ul className="text-white flex flex-wrap gap-y-2">
              {['Indore', 'Noida', 'Mumbai', 'New York (NY)'].map((city) => (
                <li key={city} className="w-1/2 mb-2">
                  <a
                    href={`https://www.google.com/maps/place/${city.replace(/\s+/g, '+')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-white text-xs">
        <p>Copyright © 2025 Henrock Structure Associates. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-condition" className="hover:text-white">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
