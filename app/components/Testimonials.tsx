import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Any good home you see emanates from a good wife. Be genuinely good, following biblical principles and your home will be uniquely different.",
    name: "Mrs. Pamela Addo",
    role: "Realtor",
  },
  {
    quote:
      "Love making, order and neatness are important keys to the heart of a married man. A wife who neglects these areas destabilizes her home.",
    name: "Mr. Nii Noi Adumoah",
    role: "Former Municipal Chief Executive, Adenta Municipality",
  },
  {
    quote:
      "A child is like a blank hard drive given to you, whatever you have at the end of the day is what you recorded on the hard drive (take responsibility).",
    name: "Mrs. Dogoe",
    role: "Founder, Mothers Nest Montessori School",
  },
  {
    quote:
      "Your home is a place of influence and power; do not underestimate the impact a good home can have on the orientation of a whole nation.",
    name: "Mrs. Yvonne Nduom",
    role: "Coconut Grove Hotel",
  },
  {
    quote:
      "To be successful as a corporate married woman your home must first be well organized. When you master the art of managing your home well your work life will be exceptionally good.",
    name: "Mrs. Pamela Addo",
    role: "Realtor",
  },
  {
    quote:
      "Your husband is not a superman; he needs your help in every area of his life. Be proactive and wise as a wife.",
    name: "Opanyin Kwadwo Kyere",
    role: "Marriage Counselor",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="bg-stone-900 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-stone-500 uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem" }}
        >
          Excerpts From Past Meetings
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
          From Past Resource Persons        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-32 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <Quote size={20} className="text-stone-600 mb-6" />
              <p
                className="text-stone-300 flex-1 mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", lineHeight: 1.85 }}
              >
                {t.quote}
              </p>
              <div>
                <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem" }}>
                  {t.name}
                </p>
                <p className="text-stone-500" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>
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
