"use client";
import { useEffect } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Main } from "./Main";
import { loopAnimation } from "../lib/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,10%)", data: <Main /> },
	{ color: "hsl(0,0%,20%)" },
	{ color: "hsl(0,0%,30%)" },
];
export const Wrapper = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const boxes = document.querySelectorAll(".wrapper-bo");
			boxes.forEach((element) => {
				gsap.fromTo(
					element,
					{
						scale: 0.75,
						transformOrigin: "center",
					},
					{
						scale: 1,
						scrollTrigger: {
							trigger: element,
							start: "top bottom",
							end: "bottom bottom",
							scrub: 2,
						},
					},
				);
			});
		}
		window.addEventListener("mousemove", loopAnimation);

		return () => window.removeEventListener("mousemove", loopAnimation);
	}, [isMounted]);

	return (
		<div className="h-full w-full ">
			<Loop
				boxName="wrapper"
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
