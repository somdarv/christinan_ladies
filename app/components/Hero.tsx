import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/waterfall.webp"
          alt="Corporate Christian Ladies in Marriage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-white/70 uppercase tracking-[0.3em] mb-6"
          style={{ fontSize: "0.75rem" }}
        >
          Faith &middot; Marriage &middot; Purpose
        </p>
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          Corporate Christian
          <br />
          Ladies in Marriage
        </h1>
        <p className="text-white/70 max-w-xl mx-auto mb-10" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
          Building godly marriages, restoring hope, and strengthening Christian homes through faith-based wisdom and community.
        </p>
        <a
          href="https://forms.gle/SQZnSRnQGpXcXyvJ8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-white/30 text-white uppercase tracking-[0.15em] hover:bg-white hover:text-stone-900 transition-all duration-300"
          style={{ fontSize: "0.8rem" }}
        >
          Join the 2026 Cohort
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 uppercase tracking-widest" style={{ fontSize: "0.65rem" }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
