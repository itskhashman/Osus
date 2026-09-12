import CtaBand from "@/components/common/CtaBand";
import ScrollReveal from "@/components/common/ScrollReveal";
import CompanyIntro from "@/components/home/CompanyIntro";
import Hero from "@/components/home/Hero";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import ProductsPreview from "@/components/home/ProductsPreview";
import StatsBar from "@/components/home/StatsBar";

export default function HomeView() {
  return (
    <>
      <ScrollReveal>
        <Hero />
        <StatsBar />
      </ScrollReveal>

      <ScrollReveal>
        <PartnersCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <CompanyIntro />
      </ScrollReveal>

      <ScrollReveal>
        <ProductsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <CtaBand />
      </ScrollReveal>
    </>
  );
}
