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

export default { fetchAllMessages, addMessage };
