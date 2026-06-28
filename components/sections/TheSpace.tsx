"use client";

import { motion } from "framer-motion";

export default function TheSpace() {
  return (
    <section className="relative h-screen overflow-hidden">

      <motion.img
        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=2200&q=80"
        alt="Loose Canon"

        initial={{
          scale:1.15
        }}

        whileInView={{
          scale:1
        }}

        transition={{
          duration:2
        }}

        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="max-w-4xl text-center">

          <p className="eyebrow">
            THE SPACE
          </p>

          <h2 className="display-xl mt-8">
            No reservations.
            <br />
            No rush.
            <br />
            Just good wine.
          </h2>

        </div>

      </div>

    </section>
  );
}