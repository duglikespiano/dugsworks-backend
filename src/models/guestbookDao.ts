import { myDatabase } from '../database/launchDatabase';

const fetchAllMessages = async () => {
	try {
		return await myDatabase.query(`SELECT * FROM messages`);
	} catch (error) {
		return error;
	}
};

const addMessage = async (name: string, hashedPassword: string, message: string) => {
	return await myDatabase.query(`INSERT INTO messages (name, password, message) VALUES (?, ?, ?)`, [
		name,
		hashedPassword,
		message,
	]);
};

export default { fetchAllMessages, addMessage };
