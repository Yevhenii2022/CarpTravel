"use client";

import { FC, useState } from "react";
import { INav, navigation } from "@/helpers/navigation";
import Link from "next/link";
import css from "./Navbar.module.scss";

const Navbar: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleModal = (): void => setIsOpen(prev => !prev);

	return (
		<div>
			<nav className="">
				<ul className="flex gap-14 mob">
					{navigation.map(({ id, title, path }: INav) => (
						<li key={id}>
							<Link
								href="/"
								className={css.link}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				type="button"
				onClick={toggleModal}
			>
				{isOpen ? "Close" : "Menu"}
			</button>
		</div>
	);
};

export default Navbar;
