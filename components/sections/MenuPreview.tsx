"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    title: "Dry Aged Duck",
    course: "Main",
  },
  {
    title: "Irish Oyster",
    course: "Starter",
  },
  {
    title: "Wild Turbot",
    course: "Seasonal",
  },
  {
    title: "Brown Butter Tart",
    course: "Dessert",
  },
];

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="section bg-[#111111]"
    >
      <div className="container">

        <p className="eyebrow">
          SAMPLE MENU
        </p>

        <h2 className="display-lg mt-8">
          Seasonal
          <br />
          Highlights
        </h2>

        <div className="mt-20">

          {dishes.map((dish, index) => (
            <motion.div
              key={dish.title}
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
                delay: index * 0.15,
              }}
              className="flex justify-between border-b border-white/10 py-10"
            >
              <h3 className="text-3xl font-[var(--font-playfair)]">
                {dish.title}
              </h3>

              <p className="uppercase tracking-[0.3em] text-white/50">
                {dish.course}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}