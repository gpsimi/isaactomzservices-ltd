"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Architectural Trends Shaping Nigeria's Future Skyline",
    excerpt:
      "Exploring the modern architectural movements transforming Nigeria's urban landscape and what they mean for property developers.",
    date: "January 8, 2026",
    category: "Architecture",
  },
  {
    id: 2,
    title: "Choosing the Right Building Materials for Nigerian Climate",
    excerpt:
      "A comprehensive guide to selecting durable, climate-appropriate materials that withstand Nigeria's unique weather conditions.",
    date: "January 3, 2026",
    category: "Construction",
  },
  {
    id: 3,
    title: "Cost Management Best Practices for Construction Projects",
    excerpt:
      "Essential strategies for keeping your construction project within budget without compromising on quality.",
    date: "December 28, 2025",
    category: "Project Management",
  },
  {
    id: 4,
    title: "The Rise of Sustainable Building in West Africa",
    excerpt:
      "How eco-friendly construction practices are gaining momentum in Nigeria and their long-term benefits.",
    date: "December 20, 2025",
    category: "Sustainability",
  },
  {
    id: 5,
    title: "Interior Design Trends for Nigerian Luxury Homes",
    excerpt:
      "Discover the interior design elements that are defining luxury residential spaces across Nigeria.",
    date: "December 15, 2025",
    category: "Interior Design",
  },
  {
    id: 6,
    title: "Understanding Building Permits in Nigeria: A Complete Guide",
    excerpt:
      "Everything you need to know about obtaining building approvals and permits for your construction project.",
    date: "December 10, 2025",
    category: "Regulations",
  },
];

export default function Blog() {
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
                  Blog
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Insights & Expertise
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                Expert perspectives on architecture, construction, and project
                management in Nigeria's built environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-light-concrete"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-16/10 bg-charcoal relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-heading text-4xl font-bold text-pure-white/10">
                        IT
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-construction-red text-pure-white text-xs font-medium uppercase tracking-wider px-3 py-1">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <time className="text-warm-concrete text-sm block mb-3">
                      {post.date}
                    </time>
                    <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-construction-red transition-colors duration-300">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-construction-red font-medium text-sm group/link"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
