import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import WineSelection from "@/components/sections/WineSelection";
import CheeseCounter from "@/components/sections/CheeseCounter";
import TheSpace from "@/components/sections/TheSpace";
import Toasties from "@/components/sections/Toasties";
import WineStyles from "@/components/sections/WineStyles";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--cream)] overflow-x-hidden">
      <Navbar />

      <Hero />

      <Experience />

      <WineSelection />

      <CheeseCounter />

      <TheSpace />

      <Toasties />

      <WineStyles />

      <Visit />

      <Footer />
    </main>
  );
}