import { posts } from '../../src/lib/db/schema';
import { createlibSQLClient, getPublishedPosts } from './utils';

async function seed(postIds: string[]) {
	const db = createlibSQLClient();

	return Promise.all(
		postIds.map(async (id) => db.insert(posts).values({ id }).onConflictDoNothing().run())
	);
}

async function main() {
	const posts = await getPublishedPosts();
	const postIds = posts.map((p) => p.data.id);
	await seed(postIds);
}

main();
