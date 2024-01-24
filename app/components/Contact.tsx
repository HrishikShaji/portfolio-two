"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { loopAnimation } from "../lib/utils";
import { VerticalBar } from "./VerticalBar";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,10%)", data: "Contact ME" },
	{ color: "#fcee12" },
	{ color: "hsl(0,0%,10%)" },
	{ color: "#fcee12" },
	{ color: "hsl(0,0%,10%)" },
	{ color: "#fcee12" },
];

export const Contact = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const boxes = document.querySelectorAll(".contact-box");
			const container = document.querySelector(".contact-container");
			boxes.forEach((element) => {
				gsap.fromTo(
					element,
					{
						scale: 0.75,
						transformOrigin: "bottom",
					},
					{
						scale: 1,
						scrollTrigger: {
							trigger: container,
							start: "top 80%",
							end: "top 20%",
							scrub: 2,
						},
					},
				);
			});
			window.addEventListener("mousemove", loopAnimation);
		}
		return () => window.removeEventListener("mousemove", loopAnimation);
	}, [isMounted]);

	return (
		<div className="contact-container h-screen w-full ">
			<Loop
				boxName="contact"
				number={5}
				boxes={boxes}
				paddingTop="20px"
				paddingBottom="40px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};
