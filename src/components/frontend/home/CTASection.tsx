'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-section bg-charcoal relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-deep-black/50 to-transparent"
        initial={{ x: '-100%' }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Decorative corners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-0 right-0 w-32 h-32"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: 64 } : { height: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-8 right-8 w-px bg-pure-white/10"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-8 right-8 h-px bg-pure-white/10"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-0 left-0 w-32 h-32"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: 64 } : { height: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-8 w-px bg-pure-white/10"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-8 h-px bg-pure-white/10"
        />
      </motion.div>

      <div className="container-luxury relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 bg-construction-red"
              />
              <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                Start Your Project
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 bg-construction-red"
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-pure-white leading-tight mb-6"
            >
              Let&apos;s Build Something{' '}
              <motion.span
                className="text-construction-red inline-block"
                animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                Exceptional
              </motion.span>{' '}
              Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-warm-concrete text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Whether you&apos;re envisioning a luxury residence or a landmark commercial project,
              our team is ready to bring your vision to life.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero-dark" size="xl" asChild>
                <Link href="/contact" className="group">
                  Schedule a Consultation
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero-dark-outline" size="xl" asChild>
                <a href="tel:+2348080321720" className="group">
                  <Phone size={18} className="mr-2" />
                  +234 808 032 1720
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
