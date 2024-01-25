import { useEffect } from "react";
import { useMount } from "../hooks/useMount";
import { data } from "../lib/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { loopAnimation } from "../lib/utils";

export const AboutDesc = () => {
	const { isMounted } = useMount();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (isMounted) {
			const desc = document.querySelector(".about-desc");
			gsap.fromTo(
				desc,
				{
					scaleX: 1,
					transformOrigin: "right",
				},
				{
					scaleX: 0,
					scrollTrigger: {
						trigger: desc,
						start: "top center",
						end: "top 20%",
						scrub: 2,
						markers: true,
					},
				},
			);
			window.addEventListener("mousemove", loopAnimation);
		}
		return () => window.removeEventListener("mousemove", loopAnimation);
	}, [isMounted]);
	return (
		<div className=" text-white h-full w-full relative flex items-end">
			<div
				style={{ backgroundColor: "#d042f8" }}
				className=" absolute z-10 w-full rounded-md h-full about-desc "
			/>
			<p>{data.about.description}</p>
		</div>
	);
};
