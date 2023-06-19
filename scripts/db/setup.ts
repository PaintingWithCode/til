import { migrate } from 'drizzle-orm/libsql/migrator';
import { createlibSQLClient } from './utils';

async function setupStats() {
	const db = createlibSQLClient();

	return migrate(db, {
		migrationsFolder: './migrations',
	});
}

async function main() {
	await setupStats();
}

main();
