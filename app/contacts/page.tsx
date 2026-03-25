import HeaderTransparent from "@/components/layout/HeaderTransparent";
import ContactsHeroSection from "@/components/sections/contacts/ContactsHeroSection";
import ContactsMapSection from "@/components/sections/contacts/ContactsMapSection";
import Footer from "@/components/layout/Footer";

export default function ContactsPage() {
  return (
    <main>
      <HeaderTransparent />
      <ContactsHeroSection />
      <ContactsMapSection />
      <Footer />
    </main>
  );
}
