"use client";

import RevealImage from "@/components/ui/RevealImage";
import FadeIn from "@/components/ui/FadeIn";

export default function WineSelection() {
  return (
    <section className="section bg-[var(--bg)]">

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}

          <RevealImage
            src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1400&q=80"
            alt="Natural Wine"
          />

          {/* Content */}

          <FadeIn>

            <p className="eyebrow">
              NATURAL WINE
            </p>

            <h2 className="display-lg mt-8">
              Curated.
              <br />
              Unfiltered.
              <br />
              Always evolving.
            </h2>

            <p className="mt-10 text-lg leading-9 text-white/70">
              Our shelves are filled with low-intervention,
              organic and biodynamic wines from passionate
              producers across Europe. Every bottle has its
              own story.
            </p>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}