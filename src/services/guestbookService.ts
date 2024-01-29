import bcrypt from 'bcrypt';
import guestbookDao from '../models/guestbookDao';
import { bcryptSalt } from '../app/env';

const fetchAllMessages = async () => {
	return await guestbookDao.fetchAllMessages();
};

const addMessage = async (name: string, password: string, message: string) => {
	const hashedPassword = await bcrypt.hash(password, parseInt(bcryptSalt as string)).then((hashedPassword) => hashedPassword);
	return await guestbookDao.addMessage(name, hashedPassword, message);
};

const deleteMessage = async (messageId: number, password: string) => {
	const messageInfoInDB = await guestbookDao.checkPassword(messageId);
	const hashedPasswordInDB = messageInfoInDB[0].password;
	const result = await bcrypt.compare(password, hashedPasswordInDB);

	if (result === false) {
		throw new Error('INVALID PASSWORD');
	} else {
		return await guestbookDao.deleteMessage(messageId);
	}
};

export default { fetchAllMessages, addMessage, deleteMessage };
