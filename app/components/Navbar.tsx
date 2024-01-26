import Link from "next/link";
import { data } from "../lib/data";

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between fixed top-0 p-10 z-50">
      <div className="p-5 rounded-3xl  text-3xl font-semibold  bg-[#d042f8] text-black">
        <h1 className="">{data.personal.name}</h1>
      </div>
      <div className="flex gap-10 p-5 rounded-3xl bg-[#d042f8] items-center">
        {data.navLinks.map((item, i) => (
          <Link
            className=" text-black font-semibold text-xl"
            key={i}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
