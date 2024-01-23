import { About } from "./About";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Main = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};
