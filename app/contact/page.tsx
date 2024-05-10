"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/noam-suissa-m-sc-b-eng-ba937b172/recent-activity/all/",
		label: "LinkedIn",
		handle: "Noam Suissa",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "noam.suissa01@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/noamsuissa",
		label: "Github",
		handle: "noamsuissa",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-white via-slate-950/20 to-white">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-slate-600 via-slate-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-slate-950 group-hover:text-slate-50 font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-150 text-slate-9500 group-hover:text-slate-50">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
