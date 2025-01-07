import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CTASection />
    </div>
  );
}