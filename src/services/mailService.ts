import nodemailer from 'nodemailer';
import { mailService, mailServiceName, mailServiceAddress, mailServicePassword } from '../app/env';

export const contactMailService = async (name: string, email: string, message: string) => {
	const transporter = nodemailer.createTransport({
		service: mailService,
		auth: {
			user: mailServiceAddress,
			pass: mailServicePassword,
		},
	});

	return transporter
		.sendMail({
			from: {
				name: mailServiceName as string,
				address: mailServiceAddress as string,
			},
			to: {
				name: mailServiceName as string,
				address: mailServiceAddress as string,
			},
			subject: `[Dug's Works] You got an email from ${name}`,
			text: `Guest name ${name} has sent you an email\nEmail address is ${email}\nBelow is the message\n\n${message}`,
		})
		.then((data) => data)
		.catch((error) => error);
};

export const guestbookMailService = async (name: string) => {
	const transporter = nodemailer.createTransport({
		service: mailService,
		auth: {
			user: mailServiceAddress,
			pass: mailServicePassword,
		},
	});

	return transporter
		.sendMail({
			from: {
				name: mailServiceName as string,
				address: mailServiceAddress as string,
			},
			to: {
				name: mailServiceName as string,
				address: mailServiceAddress as string,
			},
			subject: `[Dug's Works] A message on guestbook has been added`,
			text: `Guest name ${name} has added a message on guestbook\nPlease check it`,
		})
		.then((data) => data)
		.catch((error) => error);
};
