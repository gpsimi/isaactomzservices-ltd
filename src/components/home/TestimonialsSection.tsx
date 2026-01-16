"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chief Adebayo Okonkwo",
    role: "Property Developer",
    location: "Lagos",
    content:
      "Isaac Tomz Services Ltd exceeded our expectations in every way. Their attention to detail and commitment to quality transformed our vision into a stunning reality. The project was delivered on time and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mrs. Chioma Eze",
    role: "Homeowner",
    location: "Abuja",
    content:
      "From the initial consultation to the final handover, the team at Isaac Tomz demonstrated professionalism and expertise. Our dream home is now a beautiful reality, and we couldn't be happier with the result.",
    rating: 5,
  },
  {
    id: 3,
    name: "Engr. Oluwaseun Adeyemi",
    role: "Corporate Client",
    location: "Port Harcourt",
    content:
      "Working with Isaac Tomz on our corporate headquarters was a seamless experience. Their project management skills and construction quality are truly world-class. Highly recommended for any premium project.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Amara Nwosu",
    role: "Real Estate Investor",
    location: "Enugu",
    content:
      "I've worked with many construction firms, but Isaac Tomz stands out for their transparency and craftsmanship. They delivered exactly what was promised, and the quality speaks for itself.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-section bg-charcoal overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-12 h-[2px] bg-construction-red" />
            <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
              Testimonials
            </span>
            <span className="w-12 h-[2px] bg-construction-red" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-warm-concrete text-lg">
            Trusted by homeowners, developers, and corporations across Nigeria.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:grid lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-graphite p-8 lg:p-10 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8">
                <Quote
                  size={48}
                  className="text-construction-red/20 group-hover:text-construction-red/40 transition-colors duration-500"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-construction-red fill-construction-red"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-pure-white/90 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-construction-red/20 flex items-center justify-center">
                  <span className="font-heading text-construction-red font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-pure-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-warm-concrete text-sm">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-construction-red/50 group-hover:bg-construction-red transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-construction-red/50 group-hover:bg-construction-red transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-graphite p-8 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6">
              <Quote size={36} className="text-construction-red/30" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-construction-red fill-construction-red"
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-pure-white/90 leading-relaxed mb-6">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-construction-red/20 flex items-center justify-center">
                <span className="font-heading text-construction-red font-bold">
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-pure-white text-sm">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-warm-concrete text-xs">
                  {testimonials[currentIndex].role} •{" "}
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-warm-concrete/30 flex items-center justify-center text-warm-concrete hover:border-construction-red hover:text-construction-red transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-construction-red w-6"
                      : "bg-warm-concrete/30 hover:bg-warm-concrete/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-warm-concrete/30 flex items-center justify-center text-warm-concrete hover:border-construction-red hover:text-construction-red transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
