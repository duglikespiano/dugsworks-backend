import { myDatabase } from '../database/launchDatabase';

const fetchAllMessages = async () => {
	return await myDatabase.query(`SELECT * FROM messages`);
};

const addMessage = async (name: string, hashedPassword: string, message: string) => {
	return await myDatabase.query(`INSERT INTO messages (name, password, message) VALUES (?, ?, ?)`, [
		name,
		hashedPassword,
		message,
	]);
};

const checkPassword = async (messageId: number) => {
	return await myDatabase.query(`SELECT * FROM messages WHERE id = (?)`, [messageId]);
};

const deleteMessage = async (messageId: number) => {
	return await myDatabase.query(`DELETE FROM messages WHERE id = (?)`, [messageId]);
};

export default { fetchAllMessages, addMessage, checkPassword, deleteMessage };
