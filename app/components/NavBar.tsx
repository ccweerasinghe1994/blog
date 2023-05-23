import { NextPage } from 'next';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa';
type NavBarT = {
	className?: string;
};
const NavBar: NextPage<NavBarT> = () => {
	return (
		<div className="navbar rh-pt r-text r-h-pl  dark:text-slate-300 font-bold sticky top-0 dark:bg-slate-600 drop-shadow-xl z-10">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row tracking-wider">
				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link
						className="text-white/90 no-underline hover:text-white "
						href={'/'}
					>
						Chamara
					</Link>
				</h1>
				<div className="flex flex-row justify-center align-middle sm:justify-evenly text-white gap-4 text-4xl lg:text-5xl">
					<Link
						className="text-white/90  hover:text-white"
						href={'https://github.com/ccweerasinghe1994'}
					>
						<FaGithub />
					</Link>
					<Link
						className="text-white/90  hover:text-white"
						href={'https://github.com/ccweerasinghe1994'}
					>
						<FaFacebook />
					</Link>
					<Link
						className="text-white/90  hover:text-white"
						href={'https://github.com/ccweerasinghe1994'}
					>
						<FaTwitter />
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
