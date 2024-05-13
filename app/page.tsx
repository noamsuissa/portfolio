import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-slate-950/20 to-white">
      <nav className=" animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-600 hover:text-zinc-950"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-slate-950/0 via-slate-950/50 to-slate-950/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
        staticity={15}
      />
      <div className="text-center align-middle">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-slate-950 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          noam suissa
        </h1>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-slate-950/0 via-slate-950/50 to-slate-950/0" />
      <div className="md:text-3xl text-center animate-fade-in">
        <h1 className="text-zinc-950 font-display">
          machine learning engineer
        </h1>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-950 ">
          At the forefront of transformative computer vision and deep learning applications in healthcare.
        </h2>
      </div>
    </div>
  );

}
