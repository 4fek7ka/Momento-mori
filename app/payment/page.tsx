import HeaderTransparent from "@/components/layout/HeaderTransparent";
import PaymentIntroSection from "@/components/sections/payment/PaymentIntroSection";
import Footer from "@/components/layout/Footer";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";
import ContactPopupProvider from "@/components/providers/ContactPopupProvider";

export default function PaymentPage() {
  return (
    <ContactPopupProvider>
      <>
        <main>
          <HeaderTransparent />
          <PaymentIntroSection />
          <Footer />
        </main>
        <PhoneFloatingButton />
      </>
    </ContactPopupProvider>
  );
}
