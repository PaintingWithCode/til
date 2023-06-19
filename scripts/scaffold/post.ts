import fs from 'node:fs';
import * as p from '@clack/prompts';
import { customAlphabet } from 'nanoid';
import slugify from 'slugify';
import mustache from 'mustache';

const template = fs.readFileSync(__dirname + '/template.mustache', 'utf-8');

async function main() {
	p.intro(`Scaffold new post`);
	const post = await p.group(
		{
			title: () =>
				p.text({
					message: 'Title',
					validate(value) {
						if (value.length === 0) return `A title is required!`;
					},
				}),
			slug: ({ results }) =>
				p.text({
					message: 'Slug',
					initialValue: slugify(results.title ?? '', { lower: true }),
					validate(value) {
						if (value.length === 0) return `A slug is required!`;
					},
				}),
			topic: () =>
				p.text({
					message: 'Topic',
					validate(value) {
						if (value.length === 0) return `A topic is required!`;
					},
				}),
			tags: () => p.text({ message: 'Tags (comma separated)' }),
		},
		{
			onCancel: () => {
				p.cancel('Operation cancelled.');
				process.exit(0);
			},
		}
	);

	const filePath = createPost(post);

	p.outro(`Post created at ${filePath}`);
}

function createPost(post) {
	const { slug, tags } = post;

	let parsedTags = [];
	if (tags && tags.length > 0) {
		parsedTags = tags.split(',');
	}

	const date = new Date().toISOString().split('T')[0];

	const dirPath = `src/posts/${slug}`;
	const filePath = `${dirPath}/${slug}.md`;
	const nanoid = customAlphabet('256789bcdfghjkmnpqrstvwyzBCDFGHJKLMNPQRSTVWYZ', 8);

	fs.mkdirSync(dirPath);

	const rendered = mustache.render(template, { ...post, nanoid, date, tags: parsedTags });

	fs.writeFileSync(filePath, rendered);

	return filePath;
}

main();
