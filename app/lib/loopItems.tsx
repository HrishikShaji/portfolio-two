import { AboutDesc } from "../components/AboutDesc";
import { Content } from "../components/Content";
import { BoxObj } from "../components/Loop";
import { Title } from "../components/Title";
import { data } from "./data";

export const skillsHeadingColors: BoxObj[] = [
	{
		color: "#d042f8",
		data: (
			<Title
				title={data.skills.title}
				origin="right"
				name="skills"
				color="#d042f8"
			/>
		),
		flexDirection: "row",
	},
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
];
export const projectHeadingColors: BoxObj[] = [
	{
		color: "#d042f8",
		data: (
			<Title
				title={data.projects.title}
				origin="right"
				name="project"
				color="#d042f8"
			/>
		),
		flexDirection: "row",
	},
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
];
export const aboutHeadingColors: BoxObj[] = [
	{
		color: "#d042f8",
		data: (
			<Title
				title={data.about.title}
				origin="left"
				name="about"
				color="#d042f8"
			/>
		),
		flexDirection: "row",
	},
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
];

export const aboutContent: BoxObj[] = [
	{
		color: "hsl(0,0%,10%)",
		data: (
			<Content
				from={{ scaleX: 1 }}
				to={{ scaleX: 0 }}
				color="black"
				origin="right"
				name="about"
			>
				<AboutDesc desc={data.about.description} name="name" />
			</Content>
		),
		flexDirection: "row",
	},
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
];

export const sampleBoxes: BoxObj[] = [
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
	{ color: "hsl(0,0%,10%)", flexDirection: "row" },
	{ color: "#d042f8", flexDirection: "row" },
];
