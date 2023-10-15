import http from 'http';
import { app } from './app';
import { backendServerPort } from './env';

const backendServer = http.createServer(app);

export const backendServerStart = () => {
	backendServer.listen(backendServerPort, () => {
		if (!backendServerPort) {
			throw new Error('PORT INVALID');
		} else {
			console.log(`SERVER IS LISTENING ON PORT ${backendServerPort}\nLET'S ROLLOUT!`);
		}
	});
};
