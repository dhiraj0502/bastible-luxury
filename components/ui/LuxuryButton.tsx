"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface LuxuryButtonProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function LuxuryButton({
  children,
  dark,
}: LuxuryButtonProps) {
  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-300",
        dark
          ? "bg-[#111111] text-white hover:bg-[#1a1a1a]"
          : "bg-[#F6F3EE] text-black hover:bg-white"
      )}
    >
      {children}
    </motion.button>
  );
}