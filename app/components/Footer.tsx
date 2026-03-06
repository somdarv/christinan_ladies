export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className="text-stone-800 tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem" }}
        >
          CCWIMgh
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-stone-400" style={{ fontSize: "0.8rem" }}>
          <a href="mailto:ccwimgh@gmail.com" className="hover:text-stone-600 transition-colors">
            ccwimgh@gmail.com
          </a>
          <span className="hidden md:inline text-stone-300">|</span>
          <a href="https://wa.me/233257441441" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 transition-colors">
            WhatsApp: 0257441441
          </a>
        </div>
        <p className="text-stone-400" style={{ fontSize: "0.8rem" }}>
          &copy; 2026 Corporate Christian Women in Marriage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
