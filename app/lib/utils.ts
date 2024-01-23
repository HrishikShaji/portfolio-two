import { type ClassValue, clsx } from "clsx";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function loopAnimation(event: MouseEvent) {
	const boxes = document.querySelectorAll(".box");
	const xPos = (event.clientX / window.innerWidth) * 10;
	const yPos = (event.clientY / window.innerHeight) * 10;
	boxes.forEach((element) => {
		gsap.to(element, { x: xPos, y: yPos });
	});
}
