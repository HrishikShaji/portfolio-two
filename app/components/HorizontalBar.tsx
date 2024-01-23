"use client";

import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const HorizontalBar = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (isMounted) {
			const horizontals = document.querySelectorAll(".horizontal");
			horizontals.forEach((element) => {
				gsap.fromTo(
					element,
					{ scaleX: 0 },
					{
						scaleX: 1,
						transformOrigin: "left",
						scrollTrigger: {
							trigger: element,
							start: "top 80%",
							end: "top 20%",
							scrub: 3,
						},
					},
				);
			});
		}
	}, [isMounted]);
	return (
		<div className="horizontal box w-full h-10 rounded-md   bg-black"></div>
	);
};
