// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ContactForm = {
	name: string
	email: string
	message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const body = req.body as ContactForm;
	// TODO: Send email
	res.status(200).send({});
}
