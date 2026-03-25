import HeaderTransparent from "@/components/layout/HeaderTransparent";
import RitualProductsSection from "@/components/sections/ritual-products/RitualProductsSection";
import Footer from "@/components/layout/Footer";
import ContactPopupProvider from "@/components/providers/ContactPopupProvider";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";

export default function RitualProductsPage() {
  return (
    <ContactPopupProvider>
      <>
        <main>
          <HeaderTransparent />
          <RitualProductsSection />
          <Footer />
        </main>
        <PhoneFloatingButton />
      </>
    </ContactPopupProvider>
  );
}
