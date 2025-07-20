'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const services = [
    { title: "BIM Modeling", path: "/services/bim-modeling" },
    { title: "Pre-Engineering", path: "/services/pre-engineering" },
    { title: "Steel Detailing", path: "/services/steel-detailing" },
    { title: "Structural Designs", path: "/services/structural-designs" },
    { title: "Steel Connection Design", path: "/services/steel-connection-design" },
    { title: "Rabar Detailing", path: "/services/rabar-detailing" },
  ];

  const isServicesActive = pathname?.startsWith("/services");

  return (
    <>
      <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"}`}>
        <div className={`w-full px-4 pr-4 md:px-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
          <div>
            <Link href="/">
                <Image
                    src="/assets/logo/new-logo1.png"
                    alt="Henrock Logo"
                    width={160} // replace with actual width
                    height={60} // replace with actual height
                    className={scrolled ? 'h-14' : 'h-16 md:h-26'}
                    priority
                />
            </Link>
          </div>

          <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium" data-aos="fade-left" data-aos-delay="200">
            <li className={`${pathname === '/' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'} font-12`}><Link href="/">Home</Link></li>
            <li className={`${pathname === '/about' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'} cursor-pointer font-12`}><Link href="/about">About Us</Link></li>
            <li className={`font-12 ${pathname === '/projects' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'} cursor-pointer`}><Link href="/projects">Projects</Link></li>
            <li
              className={`relative group font-12 ${isServicesActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="cursor-pointer">Services</span>
              <ul className={`absolute top-full left-0 bg-white border shadow-md rounded z-50 transition-all duration-200 ${isServicesOpen ? "block" : "hidden"}`}>
                {services.map((item, idx) => (
                  <li key={idx} className="whitespace-nowrap">
                    <Link
                      href={item.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-100 hover:text-orange-600"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="cursor-pointer font-12">
              <a
                href="https://henrockstructureassociates.com/blog/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600"
              >
                Blog
              </a>
            </li>
            <li className={`${pathname === '/career' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'} cursor-pointer font-12`}><Link href="/career">Career</Link></li>
            <li className={`${pathname === '/contact' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'} cursor-pointer font-12`}><Link href="/contact">Contact Us</Link></li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={closeMobileMenu}></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={closeMobileMenu} className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 text-gray-800 font-medium">
          <li className={`${pathname === '/' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}><Link href="/">Home</Link></li>
          <li className={`${pathname === '/about' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}><Link href="/about">About Us</Link></li>
          <li className={`${pathname === '/projects' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}><Link href="/projects">Projects</Link></li>
          <li className="cursor-pointer">
            <div className={`flex justify-between items-center ${isServicesActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`} onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <span>Services</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isServicesOpen && (
              <ul className="mt-2 space-y-2 ml-2">
                {services.map((item, idx) => (
                  <li key={idx} className="whitespace-nowrap">
                    <Link href={item.path} onClick={closeMobileMenu} className={`block text-sm ${pathname === item.path ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="cursor-pointer font-12">
            <a
              href="https://henrockstructureassociates.com/blog/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              Blog
            </a>
          </li>
          <li className={`${pathname === '/career' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}><Link href="/career">Career</Link></li>
          <li className={`${pathname === '/contact' ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="h-24 md:h-32"></div>
    </>
  );
}