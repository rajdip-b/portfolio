// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Contact = {
	name: string
	email: string
	message: string
}

const mailer = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
		pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
	},
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(405).send({});
		return;
	}

	const body = req.body as Contact;

	mailer.sendMail({
		from: process.env.NEXT_PUBLIC_MAIL_USERNAME,
		to: process.env.NEXT_PUBLIC_MAIL_USERNAME,
		subject: `Contact from ${body.name}`,
		text: `Message: ${body.message}, Email: ${body.email}`,
		html: `<p>Message: ${body.message}, Email: ${body.email}</p>`,
	}).then(() => {
		res.status(200).send({});
	}).catch((error) => {
		console.log(error);
		res.status(500).send({});
	});
}
