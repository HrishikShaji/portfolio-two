"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BoxObj, Loop } from "./Loop";
import { useMount } from "../hooks/useMount";
import { Skill } from "./Skill";
import { loopAnimation } from "../lib/utils";
import { HorizontalBar } from "./HorizontalBar";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Content } from "./Content";

interface FeatureProps {
	item: Record<string, any>;
}

export const Feature: React.FC<FeatureProps> = ({ item }) => {
	const featuresContent: BoxObj[] = [
		{
			color: "hsl(0,0%,10%)",
			data: (
				<Content
					from={{ scaleY: 1 }}
					to={{ scaleY: 0 }}
					color="red"
					origin="bottom"
					name="feature"
				>
					<h1 className="text-white">{item.title}</h1>
				</Content>
			),
		},
		{ color: "#2edbef" },
		{ color: "hsl(0,0%,10%)" },
		{ color: "#2edbef" },
		{ color: "hsl(0,0%,10%)" },
	];
	const { isMounted } = useMount();
	useEffect(() => {
		console.log(item.title);
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const boxes = document.querySelectorAll(".feature-box");
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
		<div className="h-full w-full ">
			<Loop
				boxName="feature"
				number={4}
				boxes={featuresContent}
				paddingTop="20px"
				paddingBottom="20px"
				paddingLeft="20px"
				paddingRight="20px"
			/>
		</div>
	);
};
