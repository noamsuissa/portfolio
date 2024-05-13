"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import Particles from "../components/particles";
import { MouseEventHandler, PropsWithChildren, useState } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
	const [isHovered, setIsHovered] = useState(false);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			onMouseMove={onMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="overflow-hidden relative duration-700 border rounded-xl hover:bg-slate-950 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				{isHovered && (
					<Particles
						className="absolute inset-0 -z-11"
						quantity={100}
						staticity={15}
						r={0}
						g={255}
						b={0}
					/>
				)}
			</div>

			{children}
		</div>
	);
};
