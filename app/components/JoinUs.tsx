import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

const requirements = [
  "A married Christian woman",
  "Working in a corporate space",
  "Age limit is 40 years and below",
  "Fill the Google form with an active email account",
];

export function JoinUs() {
  return (
    <section id="join-us" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739216906046-afc47ed589fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMHdlZGRpbmclMjByaW5ncyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMTM2ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding rings"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p
              className="text-stone-400 uppercase tracking-[0.25em] mb-4"
              style={{ fontSize: "0.7rem" }}
            >
              Get Involved
            </p>
            <h2
              className="text-stone-900 mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              How to Be a Part of This
            </h2>
            <p className="text-stone-500 mb-8" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              To qualify, one must be:
            </p>

            <ul className="space-y-4 mb-10">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center">
                    <Check size={12} className="text-stone-600" />
                  </span>
                  <span className="text-stone-700" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {req}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-stone-500 mb-6" style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>
              Because of the personal and sensitive nature of this initiative, we review each
              application with care. We will be in touch with those who fit the community we're
              creating. We will reach out to you in due time.
            </p>

            <p className="text-stone-500 mb-10" style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>
              For enquiries, reach us at{" "}
              <a href="mailto:ccwimgh@gmail.com" className="text-stone-700 underline underline-offset-2 hover:text-stone-900">
                ccwimgh@gmail.com
              </a>{" "}
              or on WhatsApp at{" "}
              <a href="https://wa.me/233257441441" target="_blank" rel="noopener noreferrer" className="text-stone-700 underline underline-offset-2 hover:text-stone-900">
                0257441441
              </a>.
            </p>

            <a
              href="https://forms.gle/SQZnSRnQGpXcXyvJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-stone-900 text-white uppercase tracking-[0.15em] hover:bg-stone-800 transition-colors"
              style={{ fontSize: "0.8rem" }}
            >
              Apply for the 2026 Cohort
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
