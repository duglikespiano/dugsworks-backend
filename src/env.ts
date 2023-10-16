import dotenv from 'dotenv';
dotenv.config();

export const backendServerPort = process.env.BACKEND_SERVER_PORT;
export const frontendServerEndpoint = process.env.FRONTEND_SERVER_ENDPOINT;
export const frontendServerPort = process.env.FRONTEND_SERVER_PORT;
export const mailService = process.env.MAIL_SERVICE;
export const mailServiceName = process.env.MAIL_SERVICE_NAME;
export const mailServiceAddress = process.env.MAIL_SERVICE_ADDRESS;
export const mailServicePassword = process.env.MAIL_SERVICE_PASSWORD;
