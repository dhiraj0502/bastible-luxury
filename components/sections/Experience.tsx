"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section bg-[#F6F3EE] text-black"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="eyebrow">
            EXPERIENCE
          </p>

          <h2 className="display-lg mt-8 max-w-5xl">
            Every menu follows
            <br />
            the rhythm of
            <br />
            the Irish seasons.
          </h2>

          <div className="mt-16 max-w-2xl">

            <p className="text-xl leading-9 text-black/70">
              Bastible celebrates ingredients at
              their natural peak. Every service is
              shaped by the season, the producers
              and the craft behind each dish.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}