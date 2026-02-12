import React from 'react'
import { JsonLd } from '@/components/JsonLd'
import { Header } from '@/components/frontend/layout/Header'
import { HeroSection } from '@/components/frontend/home/HeroSection'
import { IntroSection } from '@/components/frontend/home/IntroSection'
import { ServicesSection } from '@/components/frontend/home/ServicesSection'
import { WhyChooseUsSection } from '@/components/frontend/home/WhyChooseUsSection'
// import { TestimonialsSection } from '@/components/frontend/home/TestimonialsSection'
import { CTASection } from '@/components/frontend/home/CTASection'
import { Footer } from '@/components/frontend/layout/Footer'

export const metadata = {
  title: 'Isaac Tomz Services Ltd | Construction & Engineering',
  description:
    'Isaac Tomz Services is a construction company that provides construction services to customers',
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <JsonLd />
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
  )
}
