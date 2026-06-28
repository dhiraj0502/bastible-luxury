"use client";

import { motion } from "framer-motion";

export default function FireCooking() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}

      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2200&q=80"
        alt="Chef"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center"
        >
          <p className="eyebrow">
            OPEN FIRE
          </p>

          <h2 className="display-xl mt-8">
            Simplicity
            <br />
            takes time.
          </h2>

        </motion.div>

      </div>

    </section>
  );
}