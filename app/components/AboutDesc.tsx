import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Ref, useRef } from "react";

interface AboutDescProps {
	desc: string;
	name: string;
}

export const AboutDesc: React.FC<AboutDescProps> = ({ desc, name }) => {
	const ref = useRef<HTMLParagraphElement>(null);
	useGSAP(() => {
		gsap.fromTo(
			ref.current,
			{
				scale: 0,
				transformOrigin: "right",
			},
			{
				opacity: 1,
				scrollTrigger: {
					trigger: ref.current,
					start: "top 75%",
					end: "top center",
					scrub: 3,
				},
			},
		);
	}, {});
	return <p className="absolute">{desc}</p>;
};
