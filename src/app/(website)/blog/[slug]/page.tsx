import React from "react";
import { getPayload } from "@/lib/getPayload";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowLeft } from "lucide-react";
import type { Media } from "@/payload-types";

export const dynamic = "force-dynamic";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload();

  const { docs: posts } = await payload.find({
    collection: "blog",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const post = posts[0];

  if (!post) {
    notFound();
  }

  const featuredImage = post.featuredImage as Media | undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-32 pb-20">
        <article>
          <div className="container-luxury max-w-4xl mx-auto">
            {/* Back Link */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Insights
              </Link>
            </div>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-construction-red" />
                <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                  {post.publishedDate
                    ? format(new Date(post.publishedDate), "MMMM d, yyyy")
                    : "Article"}
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                {post.title}
              </h1>

              {featuredImage?.url && (
                <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-charcoal">
                  <Image
                    src={featuredImage.url}
                    alt={featuredImage.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-construction-red hover:prose-a:text-construction-red/80">
              {post.content && <RichText data={post.content} />}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
