import { Request, Response } from 'express';
import guestbookService from '../services/guestbookService';

type messagesType = {
	id: number;
	name: string;
	password: string;
	message: string;
	created_at: Date;
	updated_at: null | Date;
};

const fetchAllMessages = async (req: Request, res: Response) => {
	try {
		const allMessages = await guestbookService.fetchAllMessages();
		const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

		if (allMessages.length !== 0) {
			allMessages.map((item: messagesType) => (item.created_at = new Date(item.created_at.getTime() + KR_TIME_DIFF)));
		} else {
			return;
		}

		res.status(200).json({ data: allMessages });
	} catch (error) {
		let message;
		if (error instanceof Error) {
			message = error.message;
		} else if (error && typeof error === 'object' && 'message' in error) {
			message = error.message;
		} else if (typeof error === 'string') {
			message = error;
		} else {
			message = 'UNKNOWN ERROR OCCURRED';
		}
		res.status(400).json({ error: message });
	}
};

const addMessage = async (req: Request, res: Response) => {
	try {
		const { name, password, message } = req.body;
		const REQUIRE_KEYS = [name, password, message];

		Object.keys(REQUIRE_KEYS).map((key: string, i: number) => {
			if (!REQUIRE_KEYS[i]) {
				throw new Error('INVALID DATA');
			}
		});

		const queryResult = await guestbookService.addMessage(name, password, message);

		if (queryResult['affectedRows'] > 0) {
			res.status(201).json({ message: 'MESSAGE ADDED' });
		} else {
			throw new Error('NO MESSAGE ADDED');
		}
	} catch (error: any) {
		let message;
		if (error instanceof Error) {
			message = error.message;
			if (error.name === 'SqlError') {
				message = error.name;
			}
		} else if (error && typeof error === 'object' && 'message' in error) {
			message = error.message;
		} else if (typeof error === 'string') {
			message = error;
		} else {
			message = 'UNKNOWN ERROR OCCURRED';
		}
		console.log(error);
		res.status(400).json({ error: message });
	}
};

export default { fetchAllMessages, addMessage };
