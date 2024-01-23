import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

export default function Home() {
	return (
		<main className="bg-white p-5 flex flex-col">
			<Hero />
			<About />
			<Skills />
			<Projects />
		</main>
	);
}
