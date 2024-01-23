"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const colors = [
	"hsl(0,0%,10%)",
	"hsl(0,0%,20%)",
	"hsl(0,0%,30%)",
	"hsl(0,0%,40%)",
	"hsl(0,0%,50%)",
	"hsl(0,0%,60%)",
	"hsl(0,0%,70%)",
	"hsl(0,0%,80%)",
	"hsl(0,0%,90%)",
];

interface LoopProps {
	number: number;
}
const Loop: React.FC<LoopProps> = ({ number }) => {
	return (
		<div
			className="box  bg-neutral-900   w-full h-full pl-20 py-10 pr-5"
			style={{ backgroundColor: colors[number] }}
		>
			{number > 0 ? <Loop number={number - 1} /> : null}
		</div>
	);
};

export const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (isMounted) {
			const animation = (event: MouseEvent) => {
				const boxes = document.querySelectorAll(".box");
				const xPos = (event.clientX / window.innerWidth) * 10;
				const yPos = (event.clientY / window.innerHeight) * 10;
				console.log(xPos, boxes);
				boxes.forEach((element) => {
					gsap.to(element, { x: xPos, y: yPos });
				});
			};

			window.addEventListener("mousemove", (event) => {
				animation(event);
			});
		}
	}, [isMounted]);

	return (
		<div className="h-screen w-full pl-10 py-10 pr-5">
			<Loop number={7} />
		</div>
	);
};
