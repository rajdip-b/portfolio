import React from 'react';
import StyledInput from '@/components/common/StyledInput';
import StyledButton from '@/components/common/StyledButton';

const Contact = () => {
	const [form, setForm] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = React.useCallback((e: HTMLInputElement | HTMLTextAreaElement) => {
		setForm(prev => ({
			...prev,
			[e.name]: e.value,
		}));
	}, []);

	return (
		<div className={'w-screen px-20 py-16 min-h-screen bg-dark-secondary text-white'} id={'contact'}>
			<h1 className={'text-3xl font-medium border-b-4 border-b-primary w-[30%] pb-3'}>Hire Me!</h1>
			<div className={'flex items-center h-full justify-center gap-x-20 mt-[100px] w-full mx-auto'}>
				<div className={'w-1/2 flex flex-col gap-y-10 items-start'}>
					<div className={'font-bold text-7xl text-primary'}>Let&apos;s Talk</div>
					<div className={'text-2xl fonts-semibold text-gray-300'}>
						Feel you have some project that needs some professional touch? Or maybe you just want to have
						some chat with me? Feel free to contact me! I&apos;m always open for new opportunities.
					</div>
				</div>
				<div className={'w-1/2 flex flex-col gap-5'}>
					<StyledInput
						type={'text'}
						label={'Name'}
						name={'name'}
						value={form.name}
						onChange={handleChange}
						placeholder={'John Doe'}
					/>
					<StyledInput
						type={'text'}
						label={'Email'}
						name={'email'}
						value={form.email}
						onChange={handleChange}
						placeholder={'johndoe@somecompany.com'}
					/>
					<StyledInput
						type={'textarea'}
						label={'Message'}
						name={'message'}
						value={form.message}
						onChange={handleChange}
						placeholder={'Hello, I would like to hire you for a project...'}
					/>
					<StyledButton className={'mt-5'} filled={false}>Contact Me</StyledButton>
				</div>
			</div>
		</div>
	);
};

export default Contact;