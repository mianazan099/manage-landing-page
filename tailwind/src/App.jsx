import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/hero";
import About from "./components/About";
import Testimonial from "./components/testimonial";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open
          ? "overflow-hidden before:absolute before:inset-x-0 before:z-10 before:h-screen before:bg-[linear-gradient(transparent,hsl(233,12%,13%))] before:opacity-60"
          : "overflow-x-hidden"
      } relative h-screen text-center font-serif text-gray-400 lg:text-start`}
    >
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}
