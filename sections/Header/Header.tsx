import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import { FC } from "react";

const Header: FC = () => {
	return (
		<header>
			<div className="flex justify-between items-center ">
				<Logo />
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
