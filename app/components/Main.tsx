import { About } from "./About";
import { Contact } from "./Contact";
import { Feature } from "./Feature";
import { Heading } from "./Heading";
import { Hero } from "./Hero";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";

export const Main = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <Hero />
      <div className="relative">
        <div className="absolute top-0 z-10 left-0 h-[300px] w-[900px]">
          <Heading />
        </div>
        <About />
      </div>
      <div className="relative flex justify-center">
        <div className="absolute  z-10   h-[300px] w-[900px]">
          <Heading />
        </div>
        <div className="flex  h-[600px] w-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <Feature key={i} />
          ))}
        </div>
      </div>
      <Skills />
      <div className="flex flex-col gap-5">
        <Heading />
        {Array.from({ length: 5 }).map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
      <Contact />
    </div>
  );
};
