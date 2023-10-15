import express from 'express';
import cors from 'cors';
import router from './routes/routes';

export const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);
