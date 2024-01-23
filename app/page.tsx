import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

export default function Home() {
	return (
		<main className="bg-white p-5 flex flex-col">
			<Hero />
			<About />
			<Skills />
		</main>
	);
}
