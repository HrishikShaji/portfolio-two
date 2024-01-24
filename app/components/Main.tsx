import { About } from "./About";
import { Contact } from "./Contact";
import { Feature } from "./Feature";
import { Heading } from "./Heading";
import { Hero } from "./Hero";
import { BoxObj } from "./Loop";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";

export const aboutColors: BoxObj[] = [
	{ color: "#d042f8" },
	{ color: "hsl(0,0%,10%)" },
	{ color: "#d042f8" },
	{ color: "hsl(0,0%,10%)" },
	{ color: "#d042f8" },
];
export const Main = () => {
	return (
		<div className="w-full relative h-full  flex flex-col gap-10">
			<div className=" h-[80vh]   justify-center items-center  text-6xl font-semibold flex w-full text-center flex-col gap-4">
				<h1 className="text-6xl mix-blend-difference font-semibold ">HELLO</h1>
				<h1 className="text-6xl font-semibold">IM HRISHIK</h1>
			</div>
			<Hero />
			<div className="relative">
				<div className="absolute top-0 z-10 left-0 h-[300px] w-[900px]">
					<Heading origin="left" name="about" colors={aboutColors} />
				</div>
				<About />
			</div>
			<div className="relative flex justify-center ">
				<div className="flex  h-[600px] w-full">
					{Array.from({ length: 3 }).map((_, i) => (
						<Feature key={i} />
					))}
				</div>
			</div>
			<Skills />
			<div className="flex flex-col gap-5 w-full">
				<Heading origin="left" name="project" colors={aboutColors} />
				{Array.from({ length: 5 }).map((_, i) => (
					<ProjectCard key={i} />
				))}
			</div>
			<Contact />
		</div>
	);
};
