import { data } from "../lib/data";
import { aboutHeadingColors, projectHeadingColors } from "../lib/loopItems";
import { About } from "./About";
import { Contact } from "./Contact";
import { Feature } from "./Feature";
import { Heading } from "./Heading";
import { Hero } from "./Hero";
import { LoopBox } from "./LoopBox";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";

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
          <Heading origin="left" name="about" colors={aboutHeadingColors} />
        </div>
        <About />
      </div>
      <div className="relative flex h-[600px] justify-center ">
        <LoopBox name="feature" />
        <div className="flex  absolute z-10 h-full w-full">
          {data.features.data.map((item, i) => (
            <Feature key={i} item={item} />
          ))}
        </div>
      </div>
      <Skills />
      <div className="flex flex-col gap-5 w-full items-center">
        <Heading origin="left" name="project" colors={projectHeadingColors} />
        <div className="grid w-full grid-cols-4 gap-2">
          {data.projects.data.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};
