import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import db from '$lib/db';
import { posts, postStatsSchema } from '$lib/db/schema.js';

export async function GET({ params }) {
	try {
		const post = await db.select().from(posts).where(eq(posts.id, params.id)).get();
		const stats = postStatsSchema.parse(post);
		return json(stats);
	} catch {
		throw error(404, 'Post not found');
	}
}
