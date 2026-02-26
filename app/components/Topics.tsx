import { ImageWithFallback } from "./figma/ImageWithFallback";

const topics = [
  "General mistakes we make as Corporate Christian Ladies in Marriage",
  "Marriage from a Christian Man's perspective",
  "Raising children whilst working in a corporate space",
  "Home management",
  "Legacy in a Christian home",
];

export function Topics() {
  return (
    <section id="topics" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Content */}
          <div>
            <p
              className="text-stone-400 uppercase tracking-[0.25em] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              What We Explore
            </p>
            <h2
              className="text-stone-900 mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Topics Discussed
            </h2>

            <ol className="space-y-5">
              {topics.map((topic, i) => (
                <li key={topic} className="flex gap-5 items-start">
                  <span
                    className="text-stone-300 flex-shrink-0 mt-0.5"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-stone-700" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {topic}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1553018440-8e05c070608a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbm90ZWJvb2slMjBwZW4lMjBtaW5pbWFsJTIwam91cm5hbHxlbnwxfHx8fDE3NzIxMzY4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Journal and pen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
