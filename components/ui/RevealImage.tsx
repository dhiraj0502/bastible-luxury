"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
}

export default function RevealImage({
  src,
  alt,
}: Props) {
  return (
    <motion.div
      initial={{
        clipPath: "inset(100% 0 0 0)",
      }}
      whileInView={{
        clipPath: "inset(0% 0 0 0)",
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-[32px]"
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{
          scale: 1.2,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="aspect-[4/5] w-full object-cover"
      />
    </motion.div>
  );
}