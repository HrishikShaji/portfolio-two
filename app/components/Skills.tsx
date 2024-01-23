"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";
import { loopAnimation } from "../lib/utils";
import { HorizontalBar } from "./HorizontalBar";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,20%)" },
	{ color: "hsl(0,0%,30%)" },
	{ color: "hsl(0,0%,40%)", flexDirection: "column", data: <HorizontalBar /> },
	{ color: "hsl(0,0%,50%)", flexDirection: "column", data: <HorizontalBar /> },
	{ color: "hsl(0,0%,60%)", flexDirection: "column", data: <HorizontalBar /> },
];

export const Skills = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		if (isMounted) {
			window.addEventListener("mousemove", loopAnimation);
		}
		return () => window.removeEventListener("mousemove", loopAnimation);
	}, [isMounted]);

	return (
		<div className="h-screen w-full ">
			<Loop
				number={4}
				boxes={boxes}
				paddingTop="20px"
				paddingBottom="20px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};
