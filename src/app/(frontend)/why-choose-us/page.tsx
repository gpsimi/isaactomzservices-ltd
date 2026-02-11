'use client'

import { Header } from '@/components/frontend/layout/Header'
import { Footer } from '@/components/frontend/layout/Footer'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const differentiators = [
  {
    title: 'End-to-End Service Delivery',
    description:
      'From initial concept to final handover, we manage every aspect of your project under one roof, ensuring seamless coordination and consistent quality.',
  },
  {
    title: 'Bespoke Solutions',
    description:
      "We don't believe in one-size-fits-all. Every project is tailored to your unique vision, requirements, and budget.",
  },
  {
    title: 'Skilled Professionals',
    description:
      'Our team comprises experienced architects, engineers, and craftsmen who bring expertise and passion to every project.',
  },
  {
    title: 'Clear Communication',
    description:
      'We keep you informed at every stage with regular updates, transparent reporting, and responsive support.',
  },
  {
    title: 'Long-Lasting Quality',
    description:
      'We use premium materials and proven construction methods to ensure your structure stands the test of time.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Our rigorous project management ensures we meet deadlines without compromising on quality.',
  },
]

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-construction-red" />
                <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                  Why Choose Us
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Our Standard of Excellence
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                Discover what sets Isaac Tomz Services Ltd apart in Nigeria&apos;s construction
                industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Differentiators Grid */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-8 bg-light-concrete border-l-2 border-construction-red"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-construction-red flex items-center justify-center">
                      <Check size={24} className="text-pure-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-section bg-light-concrete">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Promise to You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Isaac Tomz Services Ltd, we don&apos;t just construct buildings — we build
                relationships founded on trust, transparency, and mutual respect. Your satisfaction
                is not just our goal; it&apos;s our commitment.
              </p>
              <blockquote className="border-l-4 border-construction-red pl-6 text-left">
                <p className="font-heading text-2xl text-foreground italic">
                  &quot;Crafted with Precision. Built for Legacy.&quot;
                </p>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section bg-charcoal">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Ready to Experience the Difference?
              </h2>
              <Button variant="hero-dark" size="xl" asChild>
                <Link href="/contact" className="group">
                  Start Your Project
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
