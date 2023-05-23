import NavBar from './components/NavBar';
import ProfilePic from './components/ProfilePic';
import './globals.css';
import { Inter, Actor } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '100' });
export const metadata = {
	title: "chamara's blog",
	description: 'created by chamara weerasinghe'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className={`dark:bg-slate-800 ${inter.className}}`}>
				<NavBar />
				<ProfilePic />
				{children}
			</body>
		</html>
	);
}
