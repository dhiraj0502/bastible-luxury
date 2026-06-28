"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(15,15,15,0.85)"
          : "rgba(15,15,15,0)",
        backdropFilter: scrolled
          ? "blur(18px)"
          : "blur(0px)",
        height: scrolled ? 80 : 96,
      }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">

          <Link
            href="/"
            className="font-[var(--font-playfair)] text-4xl tracking-tight"
          >
            Loose Canon
          </Link>

          <nav className="hidden md:flex items-center gap-10 uppercase tracking-[0.3em] text-xs text-white/80">

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>

            <a href="#chef" className="hover:text-white transition">
              Chef
            </a>

            <a href="#reservation" className="hover:text-white transition">
              Reserve
            </a>

          </nav>

        </div>
      </div>
    </motion.header>
  );
}