import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { getPayload } from "@/lib/getPayload";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload();
  const testimonialsData = await payload.find({
    collection: "testimonials",
    sort: "-createdAt",
    limit: 6,
  });

  const testimonials = testimonialsData.docs.map((t) => ({
    ...t,
    rating: t.rating ?? 5,
    role: t.role ?? null,
    company: t.company ?? null,
    photo: t.photo ?? null,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
