import { BenefitsSection } from "@/components/landing/sections/benefits";
import { CommunitySection } from "@/components/landing/sections/community";
import { FAQSection } from "@/components/landing/sections/faq";
import { FeaturesSection } from "@/components/landing/sections/features";
import { FooterSection } from "@/components/landing/sections/footer";
import { HeroSection } from "@/components/landing/sections/hero";
import { PricingSection } from "@/components/landing/sections/pricing";
import { SponsorsSection } from "@/components/landing/sections/sponsors";
import { TeamSection } from "@/components/landing/sections/team";
import { TestimonialSection } from "@/components/landing/sections/testimonial";
import { DiagonalFloatingGallery } from "@/components/landing/FloatingGallery";

export const metadata = {
  title: "AI OM Generator",
  description: "AI-powered Offering Memorandum generator for commercial real estate firms",
  openGraph: {
    type: "website",
    url: "https://memo.estate",
    title: "AI OM Generator",
    description: "AI-powered Offering Memorandum generator for commercial real estate firms",
    images: [
      {
        url: "https://memo.estate/graph.png",
        width: 1200,
        height: 630,
        alt: "AI OM Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://memo.estate",
    title: "memo.estate - AI Offering Memorandum Generator",
    description: "AI-powered Offering Memorandum generator for commercial real estate firms",
    images: [
      "https://memo.estate/graph.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* <DiagonalFloatingGallery /> */}
      <HeroSection />
      {/* <SponsorsSection /> */}
      <FeaturesSection />
      {/* <BenefitsSection /> */}
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
