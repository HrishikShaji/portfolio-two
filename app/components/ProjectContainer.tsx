import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
	return (
		<div className="w-full h-full flex gap-2 flex-col">
			{Array.from({ length: 5 }).map((_, i) => (
				<ProjectCard key={i} />
			))}
		</div>
	);
};
