import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Coordinator() {
  return (
    <section className="bg-stone-50 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <ImageWithFallback
              src="/sey.jpeg"
              alt="Mrs Seyram Demawu Bugri"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div>
            <p
              className="text-stone-400 uppercase tracking-[0.25em] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              Meet the Co-ordinator
            </p>
            <h2
              className="text-stone-900 mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Mrs Seyram Demawu Bugri
            </h2>

            <div className="space-y-5 text-stone-600" style={{ fontSize: "0.95rem", lineHeight: 1.85 }}>
              <p>
                My journey across corporate leadership, entrepreneurship, marriage, and motherhood
                has shaped my conviction that strong homes must be built intentionally.
              </p>
              <p>
                I am a surveyor (Valuer) by profession. My greatest passion has always been seeing
                marriages thrive according to God's design. Hosting these sessions and welcoming
                resource persons into my home has been one of the most fulfilling parts of my
                journey.
              </p>
              <p>
                I believe strong marriages do not happen by chance; they are built with wisdom,
                nurtured with understanding, and sustained by faith. My prayer is that this
                platform continues to inspire, equip, and strengthen Christian homes for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
