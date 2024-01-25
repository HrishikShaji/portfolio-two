import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
	return (
		<div className="w-full h-full grid grid-cols-4 gap-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<ProjectCard key={i} />
			))}
		</div>
	);
};
