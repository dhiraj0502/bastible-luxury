"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Toasties() {
  return (
    <section className="section bg-[var(--bg)]">

      <div className="container text-center">

        <FadeIn>

          <p className="eyebrow">
            TOASTIES
          </p>

          <h2 className="display-lg mt-8">
            Simple.
            <br />
            Comforting.
            <br />
            Unforgettable.
          </h2>

          <p className="mt-10 max-w-2xl mx-auto text-lg leading-9 text-white/70">
            Golden sourdough,
            Irish cheese,
            carefully chosen ingredients
            and nothing unnecessary.
          </p>

        </FadeIn>

      </div>

    </section>
  );
}