import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import { DATABASE_URL } from '$env/static/private';

const client = createClient({ url: DATABASE_URL });
const db = drizzle(client);

export default db;
