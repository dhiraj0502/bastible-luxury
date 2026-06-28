"use client";

import { motion } from "framer-motion";

export default function Ingredients() {
  return (
    <section className="section">

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}

          <motion.div
            initial={{
              opacity:0,
              x:-80
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:1
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&q=80"
              className="rounded-[32px] w-full aspect-[4/5] object-cover"
            />

          </motion.div>

          {/* Text */}

          <motion.div
            initial={{
              opacity:0,
              x:80
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:1
            }}
          >

            <p className="eyebrow">
              INGREDIENTS
            </p>

            <h2 className="display-lg mt-6">
              Sourced with
              <br />
              intention.
            </h2>

            <p className="mt-10 text-lg leading-9 text-white/70">
              We work closely with Irish farmers,
              fishermen and artisan producers,
              allowing every ingredient to tell
              its own story.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}