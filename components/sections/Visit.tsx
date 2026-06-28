"use client";

import { MapPin, Clock } from "lucide-react";

export default function Visit() {
  return (
    <section className="section bg-[#111111]">

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="eyebrow">
              VISIT
            </p>

            <h2 className="display-lg mt-8">
              Join Us
              <br />
              In Dublin
            </h2>

          </div>

          <div className="space-y-10">

            <div className="flex gap-5">

              <MapPin className="mt-1 text-[#A87652]" />

              <div>

                <h3 className="text-xl">
                  Address
                </h3>

                <p className="mt-3 text-white/70">
                  Leonard's Corner Bar
                  <br />
                  111 South Circular Road
                  <br />
                  Dublin D08 RW2K
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Clock className="mt-1 text-[#A87652]" />

              <div>

                <h3 className="text-xl">
                  Opening Hours
                </h3>

                <p className="mt-3 text-white/70">
                  Wednesday – Saturday
                  <br />
                  5:30 PM onwards
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}