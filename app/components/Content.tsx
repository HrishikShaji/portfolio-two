import { ReactNode, useLayoutEffect, useRef } from "react";
import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { loopAnimation } from "../lib/utils";

interface ContentProps {
  name: string;
  origin: string;
  color: string;
  children: ReactNode;
  from: Record<string, any>;
  to: Record<string, any>;
}

export const Content: React.FC<ContentProps> = ({
  name,
  origin,
  color,
  children,
  from,
  to,
}) => {
  const { isMounted } = useMount();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted && ref.current) {
      gsap.fromTo(
        ref.current,
        {
          ...from,
          transformOrigin: origin,
        },
        {
          ...to,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 2,
          },
        },
      ),
        window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);
  return (
    <div className=" text-white h-full w-full relative flex items-end">
      <div
        ref={ref}
        id={`content-${name}`}
        style={{ backgroundColor: color }}
        className={` absolute z-10 w-full rounded-md h-full content${name} `}
      />
      {children}
    </div>
  );
};
