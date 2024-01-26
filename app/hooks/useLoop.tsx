import { useLayoutEffect } from "react";
import { loopAnimation } from "../lib/utils";

export const useLoop = ({ isMounted }: { isMounted: boolean }) => {
  useLayoutEffect(() => {
    if (isMounted) {
      window.addEventListener("mousemove", loopAnimation);
    }
    return () => window.removeEventListener("mousemove", loopAnimation);
  }, [isMounted]);
};
