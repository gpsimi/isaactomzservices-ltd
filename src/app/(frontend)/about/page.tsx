'use client'

import { Header } from '@/components/frontend/layout/Header'
import { Footer } from '@/components/frontend/layout/Footer'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function About() {
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
                  About Us
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Isaac Tomz Services Ltd
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                A premier architectural design and construction firm building Nigeria&apos;s future
                with precision, integrity, and excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Isaac Tomz Services Ltd is a registered Nigerian company specializing in
                    architectural design, construction, and project management. Founded on the
                    principles of quality, transparency, and client satisfaction, we have
                    established ourselves as a trusted name in Nigeria&apos;s construction industry.
                  </p>
                  <p>
                    Our team comprises experienced architects, engineers, project managers, and
                    skilled craftsmen who share a common vision: to deliver exceptional structures
                    that stand the test of time while exceeding our clients&apos; expectations.
                  </p>
                  <p>
                    We believe that every project, regardless of scale, deserves the same level of
                    attention to detail and commitment to excellence. This philosophy has earned us
                    the trust of homeowners, property developers, and corporate clients across
                    Nigeria.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <blockquote className="border-l-4 border-construction-red pl-8 py-4">
                  <p className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
                    &quot;True quality lies in detail. True luxury lies in precision.&quot;
                  </p>
                  <cite className="text-muted-foreground not-italic">— Our Guiding Philosophy</cite>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-section bg-light-concrete">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background p-10 lg:p-12 border-t-2 border-construction-red"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver premium architectural design and construction services that transform
                  our clients&apos; visions into enduring realities, while maintaining the highest
                  standards of professionalism, transparency, and craftsmanship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-background p-10 lg:p-12 border-t-2 border-construction-red"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as Nigeria&apos;s foremost architectural and construction firm,
                  setting new benchmarks for quality, innovation, and client satisfaction in the
                  built environment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Excellence', desc: 'Striving for perfection in every detail' },
                { title: 'Integrity', desc: 'Honest dealings and transparent practices' },
                { title: 'Innovation', desc: 'Embracing modern solutions and techniques' },
                { title: 'Reliability', desc: 'Consistent delivery on our commitments' },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="font-heading text-5xl font-bold text-construction-red/20 block mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
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
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white mb-6">
                Ready to Work With Us?
              </h2>
              <Button variant="hero-dark" size="xl" asChild>
                <Link href="/contact" className="group">
                  Get in Touch
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
