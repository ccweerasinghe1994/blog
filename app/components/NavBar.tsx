import { NextPage } from 'next';
import Link from 'next/link';

type NavBarT = {
	className?: string;
};
const NavBar: NextPage<NavBarT> = () => {
	return (
		<div className="navbar rh-pt r-text r-h-pl  dark:text-slate-300 font-bold sticky top-0 dark:bg-slate-600 drop-shadow-xl z-10">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row tracking-wider">
				<Link
					className="text-white/90 no-underline hover:text-white "
					href={'/'}
				>
					Chamara
				</Link>
			</div>
		</div>
	);
};
export default NavBar;
