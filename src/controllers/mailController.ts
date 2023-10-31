import { Request, Response } from 'express';
import { contactMailService, guestbookMailService } from '../services/mailService';

export const contactMailController = async (req: Request, res: Response) => {
	const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

	try {
		const { name, email, message } = req.body;
		const REQUIRE_KEYS = [name, email, message];

		Object.keys(REQUIRE_KEYS).map((key: string, i: number) => {
			if (!REQUIRE_KEYS[i]) {
				throw new Error('INVALID CONTACT MAIL INFORMATION');
			}
		});

		if (!emailRegex.test(email)) {
			throw new Error('INVALID MAIL ADDRESS');
		}

		const sendMailProcessResult = await contactMailService(name, email, message);

		if (sendMailProcessResult.responseCode) {
			throw new Error(sendMailProcessResult.command);
		} else {
			res.status(200).json({ message: 'MAIL SUCCESSFULLY SENT' });
		}
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

export const guestbookMailController = async (name: string) => {
	const sendMailProcessResult = await guestbookMailService(name);
	if (sendMailProcessResult.responseCode) {
		throw new Error(sendMailProcessResult.command);
	}
};
