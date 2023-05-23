import getFormattedDate from '@/lib/getFormatedDate';
import { getSortedPostsData, getPostById } from '@/lib/posts';
import { get } from 'http';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		postId: string;
	};
};

export function generateMetadata({ params }: Props) {
	const posts = getSortedPostsData();
	const postID = params.postId;
	const post = posts.find((item) => item.id === postID);
	if (!post) {
		return {
			title: 'Post Not Found'
		};
	}

	return {
		title: post.title
	};
}

export default async function PostPage({ params }: Props) {
	const posts = getSortedPostsData();
	const postID = params.postId;

	if (!posts.find((item) => item.id === postID)) {
		return notFound();
	}

	const { contentHtml, date, id, title } = await getPostById(postID);

	const pubDate = getFormattedDate(date);

	return (
		<main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
			<h1 className="text-3xl mt-4 mb-0">{title}</h1>
			<p className="mt-0"> {pubDate}</p>
			<article>
				<section
					dangerouslySetInnerHTML={{
						__html: contentHtml
					}}
				></section>
				<p>
					<Link href="/">Back To Home</Link>
				</p>
			</article>
		</main>
	);
}
