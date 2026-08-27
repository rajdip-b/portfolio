import React from 'react';
import Layout from '@/components/common/Layout';
import profile from '@/data/profile';
import { toast } from 'react-toastify';

const NAME_REGEX = /^[a-zA-Z]{2,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const MESSAGE_BODY_REGEX = /^(.|\n|\r\n){10,}$/;

const Contact = () => {
	const [form, setForm] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setForm(prev => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleSubmit = React.useCallback(
		(event: React.FormEvent) => {
			event.preventDefault();
			const data = {
				name: form.name.trim(),
				email: form.email.trim(),
				message: form.message.trim(),
			};

			if (NAME_REGEX.test(data.name) === false) {
				toast.error('invalid --from: enter a real name');
				return;
			}
			if (EMAIL_REGEX.test(data.email) === false) {
				toast.error('invalid --reply-to: enter a valid email');
				return;
			}
			if (MESSAGE_BODY_REGEX.test(data.message) === false) {
				toast.error('refusing to send an empty stdin');
				return;
			}

			toast.promise(
				fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				}).then(res => {
					if (!res.ok) {
						throw new Error('Failed to send message');
					}
				}),
				{
					pending: 'sending mail...',
					success: 'exit 0 — message sent',
					error: 'exit 1 — failed to send',
				},
			);
		},
		[form],
	);

	const field =
		'w-full border-0 border-b border-line bg-transparent px-0 py-2 text-fg outline-none placeholder:text-dim focus:border-accent';

	return (
		<Layout title="Contact" id="contact" command={`mail -s "hello" ${profile.email}`}>
			<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					<p className="text-sm text-muted">
						got a project, a weird idea, or just want to talk systems? drop a message. i read everything that
						isn&apos;t spam.
					</p>
					<div className="mt-6 space-y-1 text-sm">
						<p>
							<span className="text-comment">to:</span> {profile.email}
						</p>
						<p>
							<span className="text-comment">loc:</span> {profile.location}
						</p>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="border border-line bg-panel p-4 md:p-5">
					<p className="mb-4 text-[12px] text-dim">
						# compose a message · enter to send
					</p>
					<label className="mb-4 block text-[12px] text-comment">
						--from
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="your name"
							className={`mt-1 ${field}`}
						/>
					</label>
					<label className="mb-4 block text-[12px] text-comment">
						--reply-to
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="you@company.com"
							className={`mt-1 ${field}`}
						/>
					</label>
					<label className="mb-5 block text-[12px] text-comment">
						stdin
						<textarea
							name="message"
							rows={6}
							value={form.message}
							onChange={handleChange}
							placeholder="hello, i would like to..."
							className={`mt-1 resize-y ${field}`}
						/>
					</label>
					<button
						type="submit"
						className="border border-accent bg-accent px-4 py-2 text-sm text-bg hover:bg-transparent hover:text-accent"
					>
						^D send
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
