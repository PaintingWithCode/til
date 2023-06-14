import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import db from '$lib/db';
import { posts } from '$lib/db/schema';

export async function GET({ params }) {
	try {
		const post = await db
			.select({ likes: posts.likes, views: posts.views })
			.from(posts)
			.where(eq(posts.id, params.id))
			.get();
		return json(post);
	} catch {
		throw error(404, 'Post not found');
	}
}
