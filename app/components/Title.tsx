import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";

interface TitleProps {
  name: string;
  color: string;
  origin: string;
  title: string;
}

export const Title: React.FC<TitleProps> = ({ name, color, origin, title }) => {
  const { isMounted } = useMount();
  useLoop({ isMounted: isMounted });
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const desc = document.querySelector(`.${name}-title`);
    gsap.fromTo(
      desc,
      {
        scaleX: 1,
        transformOrigin: origin,
      },
      {
        scaleX: 0,
        scrollTrigger: {
          trigger: desc,
          start: "top center",
          end: "top 20%",
          scrub: 2,
        },
      },
    );
  }, {});
  return (
    <div className=" text-white h-full w-full relative flex items-end">
      <div
        style={{ backgroundColor: color }}
        className={` absolute z-10 w-full rounded-md h-full ${name}-title `}
      />
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
  );
};
