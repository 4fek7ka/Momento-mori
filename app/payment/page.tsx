import HeaderTransparent from "@/components/layout/HeaderTransparent";
import PaymentIntroSection from "@/components/sections/payment/PaymentIntroSection";
import PaymentDetailsSection from "@/components/sections/payment/PaymentDetailsSection";
import Footer from "@/components/layout/Footer";

export default function PaymentPage() {
  return (
    <main>
      <HeaderTransparent />
      <PaymentIntroSection />
      <PaymentDetailsSection />
      <Footer />
    </main>
  );
}
