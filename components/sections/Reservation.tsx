"use client";

import { motion } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="section bg-[#F6F3EE] text-black"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="eyebrow">
            RESERVATIONS
          </p>

          <h2 className="display-lg mt-8">
            Reserve
            <br />
            Your Evening
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-black/70">
            Experience a seasonal tasting menu
            crafted with Irish ingredients,
            thoughtful hospitality and a calm,
            intimate atmosphere.
          </p>

          <a
            href="https://www.opentable.ie/r/bastible-dublin"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block"
          >
            <LuxuryButton dark>
              Reserve on OpenTable
            </LuxuryButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}