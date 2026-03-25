import HeaderTransparent from "@/components/layout/HeaderTransparent";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import Footer from "@/components/layout/Footer";
import AboutPrinciplesSection from "@/components/sections/about/AboutPrinciplesSection";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";
import ContactPopupProvider from "@/components/providers/ContactPopupProvider";

export default function AboutPage() {
  return (
    <ContactPopupProvider>
      <>
        <main>
          <HeaderTransparent />
          <AboutHeroSection />
          <AboutPrinciplesSection />
          <Footer />
        </main>
        <PhoneFloatingButton />
      </>
    </ContactPopupProvider>
  );
}
