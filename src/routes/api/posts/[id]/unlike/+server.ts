import { error, json } from '@sveltejs/kit';
import { eq, sql } from 'drizzle-orm';

import db from '$lib/db';
import { posts } from '$lib/db/schema.js';

export async function PATCH({ params }) {
	try {
		const post = await db
			.update(posts)
			.set({ likes: sql`likes - 1` })
			.where(eq(posts.id, params.id))
			.returning({ likes: posts.likes })
			.run();

		return json(post);
	} catch {
		throw error(404, 'Post not found');
	}
}
