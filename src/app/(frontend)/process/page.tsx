"use client";

import { Header } from "@/components/frontend/layout/Header";
import { Footer } from "@/components/frontend/layout/Footer";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Briefing",
    description:
      "We begin with an in-depth consultation to understand your vision, requirements, and budget. This collaborative session allows us to capture your aspirations and establish clear project objectives.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our architects develop comprehensive designs including floor plans, elevations, and 3D visualizations. We refine the designs based on your feedback until they perfectly align with your vision.",
  },
  {
    number: "03",
    title: "Cost Structuring",
    description:
      "We provide detailed cost estimates and help you understand the financial implications of design choices. Our transparent approach ensures no hidden costs or surprises.",
  },
  {
    number: "04",
    title: "Execution & Supervision",
    description:
      "With approvals in place, construction begins under the watchful eye of our project managers. We maintain rigorous quality control and keep you informed at every milestone.",
  },
  {
    number: "05",
    title: "Completion & Handover",
    description:
      "Upon completion, we conduct thorough quality inspections and address any final details. The project is handed over with complete documentation and our commitment to ongoing support.",
  },
];

export default function Process() {
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
                  Our Process
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Our Approach to Excellence
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                A structured, transparent process that ensures every project is
                delivered with precision and exceeds expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-32 pb-16 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 md:left-10 top-16 bottom-0 w-px bg-steel-line" />
                  )}

                  {/* Step Number */}
                  <div className="absolute left-0 md:left-4 top-0 w-12 h-12 bg-construction-red flex items-center justify-center">
                    <span className="font-heading text-pure-white font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
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
                Our Commitment
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Throughout every phase, we maintain open communication, uphold
                the highest quality standards, and remain committed to
                delivering your project on time and within budget. Your
                satisfaction is our ultimate measure of success.
              </p>
              <div className="inline-flex items-center gap-2 text-construction-red font-heading font-semibold">
                <span className="w-8 h-[2px] bg-construction-red" />
                Built for Legacy
                <span className="w-8 h-[2px] bg-construction-red" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
