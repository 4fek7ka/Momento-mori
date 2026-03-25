import HeaderTransparent from "@/components/layout/HeaderTransparent";
import ContactsHeroSection from "@/components/sections/contacts/ContactsHeroSection";
import ContactsMapSection from "@/components/sections/contacts/ContactsMapSection";
import Footer from "@/components/layout/Footer";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";
import ContactPopupProvider from "@/components/providers/ContactPopupProvider";

export default function ContactsPage() {
  return (
    <ContactPopupProvider>
      {" "}
      <>
        <main>
          <HeaderTransparent />
          <ContactsHeroSection />
          <ContactsMapSection />
          <Footer />
        </main>
        <PhoneFloatingButton />
      </>
    </ContactPopupProvider>
  );
}
