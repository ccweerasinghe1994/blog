import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogPosts');

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);

		const blogPost: BlogPostT = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date
		};

		return blogPost;
	});
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export async function getPostById(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);

	const processContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processContent.toString();
	const blogPost: BlogPostT & { contentHtml: string } = {
		id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		contentHtml
	};

	return blogPost;
}
