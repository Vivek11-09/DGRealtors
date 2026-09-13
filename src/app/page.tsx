import { AboutPreview } from "@/components/home/about-preview";
import { BrandStatement } from "@/components/home/brand-statement";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Statistics } from "@/components/home/statistics";
import { TrustIndicators } from "@/components/home/trust-indicators";

export default function HomePage() {
  return <>
      <Hero />
      <Statistics />
      <FeaturedProjects />
      <AboutPreview />
      <ExperienceSection />
      <BrandStatement />
      <TrustIndicators />
    </>;
}
