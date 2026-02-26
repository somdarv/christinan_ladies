export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-stone-800 tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem" }}
        >
          CCLIMgh
        </p>
        <p className="text-stone-400" style={{ fontSize: "0.8rem" }}>
          &copy; 2026 Corporate Christian Ladies in Marriage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
