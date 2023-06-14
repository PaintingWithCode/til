import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, check } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable(
	'posts',
	{
		id: text('id', { length: 8 }).primaryKey(),
		views: integer('views').default(1).notNull(),
		likes: integer('likes').default(1).notNull(),
		createdAt: text('created_at').default(sql`(strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc'))`),
		updateAt: text('updated_at').default(sql`(strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc'))`),
	},
	(table) => {
		return {
			likesNotBelowOne: check('likesNotBelowOne', sql`${table.likes} > 0`),
		};
	}
);
