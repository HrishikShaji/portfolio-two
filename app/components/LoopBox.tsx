"use client";

import { useMount } from "../hooks/useMount";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { BoxObj, Loop } from "./Loop";
import { useLoop } from "../hooks/useLoop";
import { useGSAP } from "@gsap/react";
import { ReactNode } from "react";
import { sampleBoxes } from "../lib/loopItems";

interface LoopBoxProps {
	name: string;
}

export const LoopBox: React.FC<LoopBoxProps> = ({ name }) => {
	const { isMounted } = useMount();
	useLoop({ isMounted: isMounted });

	useGSAP(() => {
		const boxes = document.querySelectorAll(`.${name}-loop-box`);
		boxes.forEach((element) => {
			gsap.fromTo(
				element,
				{
					scale: 1,
					transformOrigin: "center",
				},
				{
					scale: 0,
					scrollTrigger: {
						trigger: element,
						start: "top 80%",
						end: "top 20%",
						scrub: 2,
					},
				},
			);
		});
	}, {});
	return (
		<Loop
			boxName={`${name}-loop`}
			number={5}
			boxes={sampleBoxes}
			paddingTop="20px"
			paddingBottom="40px"
			paddingLeft="20px"
			paddingRight="20px"
		/>
	);
};
