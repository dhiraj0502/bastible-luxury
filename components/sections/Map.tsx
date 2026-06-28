export default function MapSection() {
  return (
    <section className="section bg-[#111111]">
      <div className="container">
        <div className="overflow-hidden rounded-[32px] border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Bastible,+111+South+Circular+Road,+Dublin&output=embed"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Bastible Location"
          />
        </div>
      </div>
    </section>
  );
}