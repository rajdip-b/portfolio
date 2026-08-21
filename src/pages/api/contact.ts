import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Contact = {
	name: string;
	email: string;
	message: string;
};

const mailUser = process.env.MAIL_USERNAME || process.env.NEXT_PUBLIC_MAIL_USERNAME;
const mailPass = process.env.MAIL_PASSWORD || process.env.NEXT_PUBLIC_MAIL_PASSWORD;

const mailer = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: mailUser,
		pass: mailPass,
	},
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(405).send({ error: 'Method not allowed' });
		return;
	}

	if (!mailUser || !mailPass) {
		res.status(500).send({ error: 'Mail is not configured' });
		return;
	}

	const body = req.body as Contact;
	if (!body?.name?.trim() || !body?.email?.trim() || !body?.message?.trim()) {
		res.status(400).send({ error: 'Missing fields' });
		return;
	}

	try {
		await mailer.sendMail({
			from: mailUser,
			to: mailUser,
			subject: `Contact from ${body.name}`,
			text: `Message: ${body.message}, Email: ${body.email}`,
			html: `<p>Message: ${body.message}, Email: ${body.email}</p>`,
		});
		res.status(200).send({});
	} catch {
		res.status(500).send({ error: 'Failed to send message' });
	}
}
