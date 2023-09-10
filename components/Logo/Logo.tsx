import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
	return (
		<Link
			className="inline-block"
			href="/"
			aria-label="CarpTravel logo"
		>
			<Image
				src="/logo.svg"
				priority
				width={61}
				height={33}
				alt="logo"
			/>
		</Link>
	);
};

export default Logo;
