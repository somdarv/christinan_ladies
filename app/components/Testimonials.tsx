import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Being part of CCLIM has transformed not just my marriage but my entire perspective on building a home. The sessions are deeply practical and rooted in faith.",
    name: "Brenda A.",
    role: "Banker",
  },
  {
    quote:
      "I walked in uncertain about the future of my marriage, and walked out with a renewed sense of purpose. This community is truly a gift to Christian women.",
    name: "Ama K.",
    role: "Corporate Executive",
  },
  {
    quote:
      "The wisdom shared here goes beyond theory. It is lived experience from women who understand the intersection of career, faith, and family.",
    name: "Gifty M.",
    role: "Entrepreneur",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="bg-stone-900 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-stone-500 uppercase tracking-[0.25em] mb-4"
          style={{ fontSize: "0.7rem" }}
        >
          Shared Experiences
        </p>
        <h2
          className="text-white mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Stories from Our Community
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col">
              <Quote size={20} className="text-stone-600 mb-6" />
              <p
                className="text-stone-300 flex-1 mb-8"
                style={{ fontSize: "0.95rem", lineHeight: 1.85 }}
              >
                {t.quote}
              </p>
              <div>
                <p className="text-white" style={{ fontSize: "0.9rem" }}>
                  {t.name}
                </p>
                <p className="text-stone-500" style={{ fontSize: "0.8rem" }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
