import { createClient as createEdgeClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';

import { DATABASE_URL, DATABASE_AUTH_TOKEN } from '$env/static/private';

// ! To use a local SQLite db in development, uncomment the code below and comment out the edgeClient.
// import { createClient as createLocalClient } from '@libsql/client';
// const client = createLocalClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });
const client = createEdgeClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });

const db = drizzle(client);

export default db;
