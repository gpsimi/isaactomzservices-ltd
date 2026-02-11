import React from 'react'
import {Header} from '@/components/frontend/layout/Header'
import { HeroSection } from '@/components/frontend/home/HeroSection'
import { IntroSection } from '@/components/frontend/home/IntroSection'
import { ServicesSection } from '@/components/frontend/home/ServicesSection'
import { WhyChooseUsSection } from '@/components/frontend/home/WhyChooseUsSection'
// import { TestimonialsSection } from '@/components/frontend/home/TestimonialsSection'
import { CTASection } from '@/components/frontend/home/CTASection'
import { Footer } from '@/components/frontend/layout/Footer'

export function generateMetadata() {
  return {
    title: 'Home',
  }
}

export default function Page() {
return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection testimonials={testimonials} /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}


