import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import MenuSection from "@/components/menu-section"
import ServicesSection from "@/components/services-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="pt-0">
        <AboutSection />
        <MenuSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
