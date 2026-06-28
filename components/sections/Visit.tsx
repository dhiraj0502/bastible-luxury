"use client";

import { MapPin, Clock, ExternalLink } from "lucide-react";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function Visit() {
  return (
    <section id="visit" className="section bg-[var(--cream)] text-black">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="eyebrow">
              VISIT
            </p>

            <h2 className="display-lg mt-8">
              Walk In.
              <br />
              Stay Awhile.
            </h2>

            <p className="mt-10 max-w-lg text-lg leading-9 text-black/70">
              No reservations. Just great wine,
              Irish cheese, toasties and good
              conversation in the heart of Dublin.
            </p>

            <a
              href="https://maps.google.com/?q=Loose+Canon+Cheese+and+Wine+Dublin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12"
            >
              <LuxuryButton dark>
                View on Google Maps
              </LuxuryButton>
            </a>

          </div>

          {/* Right */}

          <div className="space-y-12">

            <div className="flex gap-5">

              <MapPin
                size={26}
                className="text-[var(--wine)] mt-1"
              />

              <div>

                <h3 className="text-xl font-semibold">
                  Address
                </h3>

                <p className="mt-3 text-black/70 leading-8">
                  George's Street Arcade
                  <br />
                  29 Drury Street
                  <br />
                  Dublin D02 RX95
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Clock
                size={26}
                className="text-[var(--wine)] mt-1"
              />

              <div>

                <h3 className="text-xl font-semibold">
                  Opening Hours
                </h3>

                <p className="mt-3 text-black/70 leading-8">
                  Monday – Sunday
                  <br />
                  Open Daily
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <ExternalLink
                size={26}
                className="text-[var(--wine)] mt-1"
              />

              <div>

                <h3 className="text-xl font-semibold">
                  Good to Know
                </h3>

                <p className="mt-3 text-black/70 leading-8">
                  Walk-ins only.
                  <br />
                  Wines available by the glass
                  or bottle.
                  <br />
                  Irish cheese, charcuterie
                  and toasties served daily.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}