export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <div className="container py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h2 className="font-[var(--font-playfair)] text-4xl">
              Bastible
            </h2>

            <p className="mt-6 max-w-md text-white/60 leading-8">
              Seasonal Irish dining inspired by
              craftsmanship, local produce and
              thoughtful hospitality.
            </p>

          </div>

          <div className="md:text-right">

            <p className="uppercase tracking-[0.3em] text-xs text-white/40">
              Navigation
            </p>

            <div className="mt-6 space-y-3">

              <a href="#experience" className="block hover:text-white transition">
                Experience
              </a>

              <a href="#menu" className="block hover:text-white transition">
                Menu
              </a>

              <a href="#reservation" className="block hover:text-white transition">
                Reservations
              </a>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between border-t border-white/10 pt-8 text-sm text-white/40">

          <p>
            Concept Design by Dhiraj
          </p>

          <p>
            This is an independent design concept and is not affiliated with Bastible.
          </p>

        </div>

      </div>
    </footer>
  );
}