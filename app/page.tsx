import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/services/ServicesSection";
import VipSection from "@/components/sections/VipSection";
import CondolenceSection from "@/components/sections/CondolenceSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesPreviewSection from "@/components/sections/ServicesPreviewSection";
import Footer from "@/components/layout/Footer";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";
import ContactPopupProvider from "@/components/providers/ContactPopupProvider";

export default function Home() {
  return (
    <ContactPopupProvider>
      <>
        <main>
          <Header />
          <HeroSection />
          <ServicesSection />
          <VipSection />
          <CondolenceSection />
          <AboutSection />
          <ServicesPreviewSection />
          <Footer />
        </main>

        <PhoneFloatingButton />
      </>
    </ContactPopupProvider>
  );
}
