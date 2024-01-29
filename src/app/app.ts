import express from 'express';
import cors from 'cors';
import router from '../routes/router';
import { frontendServerEndpoint } from './env';

export const app = express();

const corsOptions = {
	origin: frontendServerEndpoint,
	optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);
