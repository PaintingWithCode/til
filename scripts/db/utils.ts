import 'dotenv/config';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import { readFile } from 'node:fs/promises';
import { glob } from 'glob';
import matter from 'gray-matter';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const FILE_NAME = fileURLToPath(import.meta.url);
const DIR_NAME = dirname(FILE_NAME);

export async function getPublishedPosts() {
	const postFiles = glob.sync('../../src/posts/*/*.md', { cwd: DIR_NAME });

	const post = await Promise.all(
		postFiles.map(async (file) => {
			const filePath = path.resolve(DIR_NAME, file);
			const fileContents = await readFile(filePath, 'utf8');
			return matter(fileContents);
		})
	);

	return post.filter((p) => p.data.isPublished);
}

export function createlibSQLClient() {
	const client = createClient({
		url: process.env.DATABASE_URL ?? '',
		authToken: process.env.DATABASE_AUTH_TOKEN,
	});
	return drizzle(client);
}
