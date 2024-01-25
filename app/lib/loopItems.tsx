import { BoxObj } from "../components/Loop";
import { Title } from "../components/Title";
import { data } from "./data";

export const aboutColors: BoxObj[] = [
  { color: "#d042f8" },
  { color: "hsl(0,0%,10%)" },
  { color: "#d042f8" },
  { color: "hsl(0,0%,10%)" },
  { color: "#d042f8" },
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
  },
  { color: "hsl(0,0%,10%)" },
  { color: "#d042f8" },
  { color: "hsl(0,0%,10%)" },
  { color: "#d042f8" },
];
