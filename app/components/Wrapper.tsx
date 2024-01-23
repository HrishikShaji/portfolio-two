"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Main } from "./Main";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,70%)", data: <Main /> },
	{ color: "hsl(0,0%,80%)" },
	{ color: "hsl(0,0%,90%)" },
];
export const Wrapper = () => {
	const { isMounted } = useMount();
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
