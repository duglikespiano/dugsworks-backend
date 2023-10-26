import bcrypt from 'bcrypt';
import guestbookDao from '../models/guestbookDao';

const fetchAllMessages = async () => {
	try {
		return await guestbookDao.fetchAllMessages();
	} catch (error) {
		return error;
	}
};

const addMessage = async (name: string, password: string, message: string) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 10).then((hashedPassword) => hashedPassword);
		return await guestbookDao.addMessage(name, hashedPassword, message);
	} catch (error) {
		return error;
	}
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
