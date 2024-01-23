"use client";

import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const VerticalBar = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isMounted) {
      const vertical = document.querySelector(".vertical");
      gsap.fromTo(
        vertical,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: vertical,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        },
      );
    }
  }, [isMounted]);
  return <div className="vertical box w-20 rounded-md  h-full bg-black"></div>;
};
