'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const springValue = useSpring(0, { duration: 3000 })
  const displayValue = useTransform(springValue, (current) => Math.round(current))
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, springValue, value])

  useEffect(() => {
    return displayValue.on('change', (latest) => {
      setCurrentValue(latest)
    })
  }, [displayValue])

  return (
    <span ref={ref}>
      {currentValue}
      {suffix}
    </span>
  )
}

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-section bg-background overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-construction-red"
              />
              <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Building Nigeria&apos;s Future,{' '}
              <span className="text-construction-red">One Structure</span> at a Time
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Isaac Tomz Services Ltd is a premier architectural design and construction firm
              committed to delivering exceptional quality across Nigeria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From bespoke residential designs to large-scale commercial projects, our team of
              skilled professionals brings decades of combined experience to every project. We
              don&apos;t just build structures — we craft legacies.
            </p>
            <motion.blockquote
              whileHover={{ x: 5 }}
              className="border-l-2 border-construction-red pl-6 italic text-foreground font-heading text-xl pt-4"
            >
              &quot;True quality lies in detail. True luxury lies in precision.&quot;
            </motion.blockquote>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: 8, suffix: '+', label: 'Years of Experience' },
            { value: 50, suffix: '+', label: 'Projects Completed' },
            { value: 100, suffix: '%', label: 'Client Satisfaction' },
            { value: 20, suffix: '+', label: 'Skilled Professionals' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-default"
            >
              <span className="block font-heading text-4xl md:text-5xl font-bold text-construction-red mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
