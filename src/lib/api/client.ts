import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const client = setupCache(Axios);

export default client;
