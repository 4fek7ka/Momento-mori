import HeaderTransparent from "@/components/layout/HeaderTransparent";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import Footer from "@/components/layout/Footer";
import AboutPrinciplesSection from "@/components/sections/about/AboutPrinciplesSection";

export default function AboutPage() {
  return (
    <main>
      <HeaderTransparent />
      <AboutHeroSection />
      <AboutPrinciplesSection />
      <Footer />
    </main>
  );
}
