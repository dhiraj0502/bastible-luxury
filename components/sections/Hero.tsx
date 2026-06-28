"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2200&q=80')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}

      <div className="container relative z-10 flex h-full items-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-3xl"
        >
          <p className="eyebrow">
            Dublin · Ireland
          </p>

          <h1 className="display-xl mt-6">
            Seasonal
            <br />
            Irish Dining
          </h1>

          <p className="mt-10 max-w-xl text-lg text-white/70 leading-8">
            Quietly refined.
            Thoughtfully sourced.
            Inspired by the rhythm of Irish seasons.
          </p>

          <button className="button-primary mt-12">
            Reserve a Table
          </button>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          Scroll
        </p>

        <p className="mt-2 text-xl">
          ↓
        </p>
      </motion.div>

    </section>
  );
}