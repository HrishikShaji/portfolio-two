import { About } from "./About";
import { Contact } from "./Contact";
import { Feature } from "./Feature";
import { Hero } from "./Hero";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";

export const Main = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<Hero />
			<About />

			<div className="flex gap-10">
				{Array.from({ length: 3 }).map((_, i) => (
					<Feature key={i} />
				))}
			</div>
			<Skills />
			<div className="flex flex-col gap-5">
				{Array.from({ length: 5 }).map((_, i) => (
					<ProjectCard key={i} />
				))}
			</div>
			<Contact />
		</div>
	);
};
