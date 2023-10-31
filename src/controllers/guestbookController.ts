import { Request, Response } from 'express';
import { guestbookMailController } from './mailController';
import guestbookService from '../services/guestbookService';

const fetchAllMessages = async (req: Request, res: Response) => {
	try {
		const allMessages = await guestbookService.fetchAllMessages();
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
			res.status(201).json({ message: 'MESSAGE ADDED', messageId: parseInt(queryResult.insertId.toString()) });
			await guestbookMailController(name);
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
		console.error(error);
		res.status(400).json({ error: message });
	}
};

const deleteMessage = async (req: Request, res: Response) => {
	try {
		const { messageId, password } = req.body;
		const REQUIRE_KEYS = [messageId, password];

		Object.keys(REQUIRE_KEYS).map((key: string, i: number) => {
			if (!REQUIRE_KEYS[i]) {
				throw new Error('INVALID DATA');
			}
		});

		const queryResult = await guestbookService.deleteMessage(messageId, password);

		if (queryResult.name === 'SqlError') {
			throw new Error('SqlError');
		} else {
			res.status(200).json({ message: 'MESSAGE DELETED' });
		}
	} catch (error: any) {
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
		console.error(error);
		res.status(400).json({ error: message });
	}
};

export default { fetchAllMessages, addMessage, deleteMessage };
