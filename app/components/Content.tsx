import { ReactNode, useEffect } from "react";
import { useMount } from "../hooks/useMount";
import { data } from "../lib/data";
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (isMounted) {
      const desc = document.querySelector(`.content${name}`);
      console.log("name is", name);
      gsap.fromTo(
        desc,
        {
          ...from,
          transformOrigin: origin,
        },
        {
          ...to,
          scrollTrigger: {
            trigger: desc,
            start: "top center",
            end: "top 20%",
            scrub: 2,
            markers: true,
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
        style={{ backgroundColor: color }}
        className={` absolute z-10 w-full rounded-md h-full content${name} `}
      />
      {children}
    </div>
  );
};
