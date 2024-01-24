import { About } from "./About";
import { Feature } from "./Feature";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Main = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<Hero />
			<About />

			<div className="flex gap-2">
				{Array.from({ length: 3 }).map((_, i) => (
					<Feature key={i} />
				))}
			</div>
			<Skills />
			<Projects />
		</div>
	);
};
