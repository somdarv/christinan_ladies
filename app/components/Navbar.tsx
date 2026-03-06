import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Topics", "Stories", "Join Us"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="tracking-[0.2em] text-stone-800 uppercas"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
        >
          CCLIM
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-stone-500 hover:text-stone-900 transition-colors tracking-wide uppercase"
              style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
            >
              {link}
            </a>
          ))}
          <a
            href="https://forms.gle/SQZnSRnQGpXcXyvJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-stone-900 text-white tracking-wide uppercase hover:bg-stone-800 transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-stone-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-stone-600 hover:text-stone-900 tracking-wide uppercase"
              style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://forms.gle/SQZnSRnQGpXcXyvJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-stone-900 text-white text-center tracking-wide uppercase hover:bg-stone-800 transition-colors"
            style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
            onClick={() => setOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
