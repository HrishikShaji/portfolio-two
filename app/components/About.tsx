"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { loopAnimation } from "../lib/utils";
import { VerticalBar } from "./VerticalBar";

const boxes: BoxObj[] = [
	{ color: "hsl(0,0%,20%)", data: "About ME" },
	{ color: "hsl(0,0%,40%)", flexDirection: "row", data: <VerticalBar /> },
	{ color: "hsl(0,0%,50%)", flexDirection: "row", data: <VerticalBar /> },
	{ color: "hsl(0,0%,60%)", flexDirection: "row", data: <VerticalBar /> },
];

export const About = () => {
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
				number={3}
				boxes={boxes}
				paddingTop="20px"
				paddingBottom="40px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};
