import dotenv from 'dotenv';
dotenv.config();

export const backendServerPort = process.env.BACKEND_SERVER_PORT;
export const frontendServerEndpoint = process.env.FRONTEND_SERVER_ENDPOINT;
export const mailService = process.env.MAIL_SERVICE;
export const mailServiceName = process.env.MAIL_SERVICE_NAME;
export const mailServiceAddress = process.env.MAIL_SERVICE_ADDRESS;
export const mailServicePassword = process.env.MAIL_SERVICE_PASSWORD;
export const databaseHost = process.env.DATABASE_HOST;
export const databasePort = process.env.DATABASE_PORT;
export const databaseURL = process.env.DATABASE_URL;
export const databaseUser = process.env.DATABASE_USER;
export const databasePassword = process.env.DATABASE_PASSWORD;
export const databaseName = process.env.DATABASE_NAME;
export const bcryptSalt = process.env.BCRYPT_SALT;
