"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section bg-[var(--cream)] text-black"
    >
      <div className="container">

        <FadeIn>

          <SectionTitle
            eyebrow="ABOUT"
            title={`Wine first.\nEverything else follows.`}
          />

          <div className="mt-16 max-w-3xl">

            <p className="text-xl leading-10 text-black/70">
              Loose Canon is an independent natural wine
              shop and bar in the heart of Dublin,
              serving low-intervention wines alongside
              Irish cheese, charcuterie and toasties.
            </p>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}