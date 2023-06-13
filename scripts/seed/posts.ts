import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { glob } from 'glob';
import parse from 'front-matter';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { migrate } from 'drizzle-orm/libsql/migrator';

import { posts } from '../../src/lib/db/schema';
import type { PostMetadata } from '../../src/lib/core/posts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function getPostIds() {
	const postFiles = glob.sync('../../src/posts/*/*.md', { cwd: __dirname });

	const postMetadata = await Promise.all(
		postFiles.map(async (file) => {
			const filePath = path.resolve(__dirname, file);
			const fileContents = await readFile(filePath, 'utf8');
			const { attributes: metadata } = parse(fileContents) as { attributes: PostMetadata };

			return metadata;
		})
	);

	return postMetadata.filter((p) => p.isPublished).map((p) => p.id);
}

function getExistingIds() {
	const filePath = path.resolve(__dirname, 'existingIds.txt');

	try {
		return readFileSync(filePath, 'utf8')
			.split('\n')
			.filter((id) => id.trim() !== '');
	} catch {
		return [];
	}
}

async function migrateAndSeed(postIds: string[]) {
	const client = createClient({ url: process.env.DATABASE_URL ?? '' });
	const db = drizzle(client);

	await migrate(db, {
		migrationsFolder: './migrations',
	});

	const existingPostIds = getExistingIds();
	const newPostIds = postIds.filter((id) => !existingPostIds.includes(id));

	return Promise.all(
		newPostIds.map(async (id) =>
			db.insert(posts).values({ id, views: 1, likes: 1 }).onConflictDoNothing().run()
		)
	);
}

async function main() {
	const postIds = await getPostIds();
	await migrateAndSeed(postIds);
	console.log(postIds);
}

main();
