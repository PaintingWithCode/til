import { error } from '@sveltejs/kit';
import { eq, sql } from 'drizzle-orm';

import db from '$lib/db';
import { posts } from '$lib/db/schema.js';

export async function PATCH({ params }) {
	try {
		await db
			.update(posts)
			.set({ likes: sql`likes - 1` })
			.where(eq(posts.id, params.id))
			.run();

		return new Response(undefined, { status: 200 });
	} catch {
		throw error(404, 'Post not found');
	}
}
