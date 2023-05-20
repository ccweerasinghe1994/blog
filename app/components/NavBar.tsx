import { BiAnchor } from 'react-icons/bi';
const NavBar = () => {
	return (
		<div className="navbar ml-2 mt-2 rh-mt r-text r-h-ml  dark:text-slate-300">
			<div className="flex items-center gap-2 r-h-g">
				<h1 className="border p-3 rounded-full bg-blue-100">
					<BiAnchor className="text-green-600" />
				</h1>
				<nav>
					<ul className="flex gap-2 r-h-g">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#about">About Me</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default NavBar;
