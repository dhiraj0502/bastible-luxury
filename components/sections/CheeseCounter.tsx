"use client";

import RevealImage from "@/components/ui/RevealImage";
import FadeIn from "@/components/ui/FadeIn";

export default function CheeseCounter() {
  return (
    <section className="section bg-[var(--cream)] text-black">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Content */}

          <FadeIn>

            <p className="eyebrow">
              IRISH CHEESE
            </p>

            <h2 className="display-lg mt-8">
              Small producers.
              <br />
              Big flavour.
            </h2>

            <p className="mt-10 text-lg leading-9 text-black/70">
              Every cheese is carefully selected
              from independent Irish producers,
              celebrating craftsmanship,
              seasonality and exceptional quality.
            </p>

          </FadeIn>

          {/* Image */}

          <RevealImage
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1400&q=80"
            alt="Irish Cheese"
          />

        </div>

      </div>
    </section>
  );
}