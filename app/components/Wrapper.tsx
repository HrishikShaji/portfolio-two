"use client";
import { useEffect } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Main } from "./Main";
import { loopAnimation } from "../lib/utils";

const boxes: BoxObj[] = [
  { color: "hsl(0,0%,70%)", data: <Main /> },
  { color: "hsl(0,0%,80%)" },
  { color: "hsl(0,0%,90%)" },
];
export const Wrapper = () => {
  const { isMounted } = useMount();
  useEffect(() => {
    if (isMounted) {
      window.addEventListener("mousemove", loopAnimation);

      return () => window.removeEventListener("mousemove", loopAnimation);
    }
  }, [isMounted]);

  return (
    <div className="h-full w-full ">
      <Loop
        number={2}
        boxes={boxes}
        paddingTop="40px"
        paddingBottom="40px"
        paddingLeft="20px"
        paddingRight="20px"
      />
    </div>
  );
};
