import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Ingredients from "@/components/sections/Ingredients";
import FireCooking from "@/components/sections/FireCooking";
import MenuPreview from "@/components/sections/MenuPreview";
import Reservation from "@/components/sections/Reservation";
import Visit from "@/components/sections/Visit";
import MapSection from "@/components/sections/Map";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#111111] text-[#F6F3EE]">
      <Navbar />

      <Hero />

      <Experience />

      <Ingredients />

      <FireCooking />

      <MenuPreview />

      <Reservation />

      <Visit />

      <MapSection />

      <Footer />
    </main>
  );
}