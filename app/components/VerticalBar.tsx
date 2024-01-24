"use client";

import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const VerticalBar = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (isMounted) {
			const verticals = document.querySelectorAll(".vertical");
			verticals.forEach((element) => {
				gsap.fromTo(
					element,
					{ scaleY: 0 },
					{
						scaleY: 1,
						transformOrigin: "top",
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
	return <div className="vertical box w-10 rounded-md  h-full bg-black"></div>;
};
