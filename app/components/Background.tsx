export function Background() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <p
          className="text-stone-400 uppercase tracking-[0.25em] mb-4"
          style={{ fontSize: "0.7rem" }}
        >
          Our Story
        </p>

        <h2
          className="text-stone-900 mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Background
        </h2>

        <div className="space-y-6 text-stone-600" style={{ fontSize: "1rem", lineHeight: 1.9 }}>
          <p>
            Sixteen years ago, a group of married Christian corporate women from KNUST began meeting
            over breakfast to seek practical, faith-based guidance on marriage. What started as a
            single gathering grew into a quarterly tradition of hosting resource persons, sharing
            openly, and strengthening their homes through biblical wisdom.
          </p>
          <p>
            As the impact of these sessions spread among friends and family, the vision expanded.
            Today, this initiative seeks to reach a wider audience, building godly marriages,
            restoring hope, and strengthening Christian homes as a contribution to the Body of
            Christ.
          </p>
        </div>

        {/* Scripture quote */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <blockquote
            className="text-stone-800 italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}
          >
            "By wisdom a house is built, and through understanding it is established; through
            knowledge its rooms are filled with rare and beautiful treasures."
          </blockquote>
          <p
            className="mt-4 text-stone-400 uppercase tracking-[0.15em]"
            style={{ fontSize: "0.75rem" }}
          >
            Proverbs 24:3-4
          </p>
        </div>
      </div>
    </section>
  );
}
