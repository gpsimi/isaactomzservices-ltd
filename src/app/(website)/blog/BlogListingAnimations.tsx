"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { Blog, Media } from "@/payload-types";

export const BlogListingAnimations = ({ posts }: { posts: Blog[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => {
        const featuredImage = post.featuredImage as Media | undefined;

        return (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-light-concrete flex flex-col h-full"
          >
            {/* Image */}
            <div className="aspect-16/10 bg-charcoal relative overflow-hidden">
              {featuredImage?.url ? (
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-pure-white/10">
                    IT
                  </span>
                </div>
              )}

              {/* Category tag - using placeholder if not in schema, or adjust if you have categories */}
              <div className="absolute top-4 left-4">
                <span className="bg-construction-red text-pure-white text-xs font-medium uppercase tracking-wider px-3 py-1">
                  Article
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col grow">
              <time className="text-warm-concrete text-sm block mb-3">
                {post.publishedDate
                  ? format(new Date(post.publishedDate), "MMMM d, yyyy")
                  : "Recently"}
              </time>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-construction-red transition-colors duration-300 line-clamp-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-construction-red font-medium text-sm group/link"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};
