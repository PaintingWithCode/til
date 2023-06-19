import Axios from 'axios';
import { setupCache, type AxiosCacheInstance } from 'axios-cache-interceptor';

let client: AxiosCacheInstance;
let isCacheInitialized = false;

function createClient() {
	if (!isCacheInitialized) {
		client = setupCache(Axios);
		isCacheInitialized = true;
	}

	if (!client) {
		throw new Error('Cache client is not initialized properly.');
	}

	return client;
}

export default createClient();
