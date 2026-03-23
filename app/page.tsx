import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import VipSection from "@/components/sections/VipSection";
import CondolenceSection from "@/components/sections/CondolenceSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <VipSection />
      <CondolenceSection />
      <AboutSection />
    </main>
  );
}
