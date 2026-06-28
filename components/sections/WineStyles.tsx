"use client";

import FadeIn from "@/components/ui/FadeIn";

const wines = [
  "Orange Wine",
  "Skin Contact",
  "Pet Nat",
  "Red",
  "White",
  "Rosé",
];

export default function WineStyles() {
  return (
    <section className="section bg-[var(--cream)] text-black">

      <div className="container">

        <FadeIn>

          <p className="eyebrow">
            BY THE GLASS
          </p>

          <h2 className="display-lg mt-8">
            Always
            <br />
            Changing.
          </h2>

        </FadeIn>

        <div className="mt-20">

          {wines.map((wine) => (

            <div
              key={wine}
              className="flex justify-between border-b border-black/10 py-10"
            >

              <h3 className="text-4xl font-[var(--font-playfair)]">
                {wine}
              </h3>

              <span className="uppercase tracking-[0.3em] text-black/40">
                Glass
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}