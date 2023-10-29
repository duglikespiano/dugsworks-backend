import mariadb from 'mariadb';
import { databaseHost, databasePort, databaseUser, databasePassword, databaseName } from '../env';

export const myDatabase = mariadb.createPool({
	host: databaseHost,
	port: parseInt(databasePort!),
	user: databaseUser,
	password: databasePassword,
	database: databaseName,
});

myDatabase
	.getConnection()
	.then(() => console.log('DATABASE INITIALIZED'))
	.catch((error) => console.error(error));
