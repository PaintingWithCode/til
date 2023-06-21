import axios from 'axios';
import { setupCache, type AxiosCacheInstance } from 'axios-cache-interceptor';

let client: AxiosCacheInstance;

function getClient() {
	if (!client) {
		try {
			client = setupCache(axios);
		} catch {
			console.error('Error initializing API client');
		}
	}
	return client;
}

export default getClient();
