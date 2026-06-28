"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="max-w-3xl"
    >
      <p className="eyebrow">{eyebrow}</p>

      <h2 className="display-lg mt-6 whitespace-pre-line">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-9 text-white/70">
          {description}
        </p>
      )}
    </motion.div>
  );
}