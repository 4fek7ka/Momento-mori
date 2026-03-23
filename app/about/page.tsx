import HeaderTransparent from "@/components/layout/HeaderTransparent";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutStatsSection from "@/components/sections/about/AboutStatsSection";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main>
      <HeaderTransparent />
      <AboutHeroSection />
      <AboutStatsSection />
      <Footer />
    </main>
  );
}
