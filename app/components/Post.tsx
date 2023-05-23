import getFormattedDate from '@/lib/getFormatedDate';
import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
	post: BlogPostT;
};

const Post: NextPage<Props> = ({ post }) => {
	const { date, id, title } = post;
	const formattedDate = getFormattedDate(date);
	return (
		<li className="mt-4 text-2xl dark:text-white/90">
			<Link
				className="underline hover:text-black/70 dark:hover:text-white"
				href={`/posts/${id}`}
			>
				{title}
			</Link>
			<br />
			<p className="mt-1 text-sm">{formattedDate}</p>
		</li>
	);
};

export default Post;
