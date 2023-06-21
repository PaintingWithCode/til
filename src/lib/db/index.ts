import { drizzle } from 'drizzle-orm/libsql';

import { DATABASE_URL, DATABASE_AUTH_TOKEN } from '$env/static/private';

let client;

if (import.meta.env.DEV) {
	const { createClient: createLocalClient } = await import('@libsql/client');
	client = createLocalClient({ url: DATABASE_URL });
} else {
	const { createClient: createEdgeClient } = await import('@libsql/client/web');
	client = createEdgeClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });
}

const db = drizzle(client);

export default db;
