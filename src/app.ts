import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import { frontendServerEndpoint, frontendServerPort } from './env';

export const app = express();

const corsOptions = {
	origin: `${frontendServerEndpoint}:${frontendServerPort}`,
	optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);
