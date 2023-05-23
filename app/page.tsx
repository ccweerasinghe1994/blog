import Posts from './components/Posts';

export default function Home() {
	return (
		<main className="mx-auto px-6">
			<p className="mt-12 text-3xl text-center dark:text-white">
				Hello and welcome 👋&nbsp;
				<span className="whitespace-nowrap">
					I&apos;m <span className="font-bold">Chamara</span>
				</span>
			</p>
			<Posts />
		</main>
	);
}
