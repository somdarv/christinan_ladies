"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Background } from "./components/Background";
import { Coordinator } from "./components/Coordinator";
import { Topics } from "./components/Topics";
import { Testimonials } from "./components/Testimonials";
import { JoinUs } from "./components/JoinUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <Background />
      <Coordinator />
      <Topics />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
}
