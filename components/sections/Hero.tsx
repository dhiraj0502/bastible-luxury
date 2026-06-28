"use client";

import { motion } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=2200&q=80')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

      {/* Content */}

      <div className="container relative z-10 flex h-full items-center">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            DUBLIN • GEORGE'S STREET ARCADE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-xl mt-8"
          >
            Natural Wine.
            <br />
            Irish Cheese.
            <br />
            Good Company.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg leading-9 text-white/75"
          >
            Low-intervention wines, Irish cheese,
            toasties and conversation in the heart
            of Dublin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12"
          >
            <LuxuryButton>
              Walk In Today
            </LuxuryButton>
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

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
        <p className="text-[11px] uppercase tracking-[0.4em] text-white/60">
          Scroll
        </p>

        <div className="mt-3 text-xl">
          ↓
        </div>
      </motion.div>

    </section>
  );
}