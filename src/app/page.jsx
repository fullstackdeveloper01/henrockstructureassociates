// src/app/page.jsx
'use client' // optional if using client-side hooks

import React from 'react'

import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import About from '../components/About';
import TestimonialSection from '../components/TestimonialSection'
import StatsSection from '../components/StatsSection'
import WhyHenrock from '../components/WhyHenrock'
import WhyDifferent from '../components/WhyDifferent'
import Blog from '../components/Blog';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <About />
      <StatsSection />
      <WhyHenrock />
      <WhyDifferent />
      <TestimonialSection />
      <Blog />
    </div>
  )
}
