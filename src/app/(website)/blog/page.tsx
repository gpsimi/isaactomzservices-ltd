import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPayload } from "@/lib/getPayload";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import type { Media } from "@/payload-types";
import { BlogListingAnimations } from "./BlogListingAnimations";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const payload = await getPayload();

  const postsData = await payload.find({
    collection: "blog",
    where: {
      _status: {
        equals: "published",
      },
    },
    sort: "-publishedDate",
  });

  const posts = postsData.docs.map((post) => ({
    ...post,
    excerpt: post.excerpt ?? null,
    publishedDate: post.publishedDate ?? null,
    featuredImage: post.featuredImage ?? null,
    author: post.author ?? null,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="container-luxury">
            <div className="max-w-4xl">
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
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <BlogListingAnimations posts={posts} />
            {posts.length === 0 && (
              <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed text-muted-foreground">
                <p className="text-lg">No posts found. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
