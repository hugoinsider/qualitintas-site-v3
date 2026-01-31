import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Store } from "@/components/sections/Store";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Suppliers } from "@/components/sections/Suppliers";
import { About } from "@/components/sections/About";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-blue selection:text-white font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suppliers />
        <Products />
        <Store />
        <Location />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
