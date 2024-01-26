"use client";
import gsap from "gsap";
import { Wrapper } from "./components/Wrapper";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  return (
    <main className="p-5 bg-black">
      <Wrapper />
    </main>
  );
}
