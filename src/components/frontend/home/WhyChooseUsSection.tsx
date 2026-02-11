'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import aboutUsImage from '@/assets/images/about-us-image-2.png'

const reasons = [
  {
    title: 'Bespoke Solutions',
    description:
      'Every project is unique. We tailor our approach to meet your specific vision and requirements.',
  },
  {
    title: 'Premium Craftsmanship',
    description:
      'We use only the finest materials and employ skilled artisans who take pride in their work.',
  },
  {
    title: 'Transparent Cost Control',
    description:
      'Clear budgeting and honest communication throughout, with no hidden costs or surprises.',
  },
  {
    title: 'Timely Delivery',
    description:
      'We respect your time. Our rigorous project management ensures on-schedule completion.',
  },
  {
    title: 'Professional Supervision',
    description:
      'Experienced project managers oversee every aspect, maintaining the highest quality standards.',
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-section bg-background overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-construction-red" />
              <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Our Standard of <span className="text-construction-red">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Isaac Tomz Services Ltd, we don&apos;t just meet expectations — we exceed them.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-light-concrete relative overflow-hidden h-[550px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={aboutUsImage}
                  alt="Why Choose Us"
                  width={1000}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-construction-red" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex gap-5 p-6 bg-light-concrete border-l-2 border-construction-red hover:bg-secondary transition-colors duration-300"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 bg-construction-red flex items-center justify-center">
                    <Check size={20} className="text-pure-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
