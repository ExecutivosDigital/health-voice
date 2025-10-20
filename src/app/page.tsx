"use client";
import { Buffer1 } from "@/components/ui/buffer-1";
import { Buffer2 } from "@/components/ui/buffer-2";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Section1 } from "@/components/ui/section-1";
import { Section2 } from "@/components/ui/section-2";
import { Section3 } from "@/components/ui/section-3";
import { Section4 } from "@/components/ui/section-4";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Buffer1 />
      <Section1 />
      <Buffer2 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
