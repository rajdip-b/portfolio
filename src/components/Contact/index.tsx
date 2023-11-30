import React from 'react';
import StyledInput from '@/components/common/StyledInput';
import StyledButton from '@/components/common/StyledButton';
import Layout from '@/components/common/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { toast } from 'react-toastify';
import axios from 'axios';

const NAME_REGEX = /^[a-zA-Z]{2,}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const MESSAGE_BODY_REGEX = /^.{10,}$/;

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

	const handleSubmit = React.useCallback(() => {
		const data = {
			name: form.name.trim(),
			email: form.email.trim(),
			message: form.message.trim(),
		};

		if (NAME_REGEX.test(data.name) === false) {
			toast.error('Please enter a valid name!');
			return;
		}
		if (EMAIL_REGEX.test(data.email) === false) {
			toast.error('Please enter a valid email!');
			return;
		}
		if (MESSAGE_BODY_REGEX.test(data.message) === false) {
			toast.error('Sending empty message is sort of absurd!');
			return;
		}

		toast.promise(
			axios({
				method: 'POST',
				url: '/api/contact',
				data,
			}),
			{
				pending: 'Sending...',
				success: 'Message sent!',
				error: 'Failed to send message!',
			},
		);
	}, [form]);

	return (
		<Layout className={'h-fit'} title={'Hire Me!'} id={'contact'}>
			<div
				className={
					'flex flex-col md:flex-row items-center h-full justify-center gap-x-20 gap-y-16 mt-[100px] w-full mx-auto'
				}
			>
				<div className={'w-full md:w-1/2 flex flex-col gap-y-10 items-start'}>
					<AnimationOnScroll
						animateOnce
						animateIn={'animate__fadeInLeft'}
						className={'font-bold text-6xl md:text-7xl text-primary'}
					>
						Let&apos;s Talk
					</AnimationOnScroll>
					<AnimationOnScroll
						animateOnce
						animateIn={'animate__fadeInUp'}
						delay={600}
						className={'text-xl md:text-2xl fonts-semibold text-gray-600 dark:text-gray-300'}
					>
						Feel you have a project that needs some professional touch? Or maybe you just want to have some
						chat with me? Feel free to contact me! I&apos;m always open for new opportunities.
					</AnimationOnScroll>
				</div>
				<div className={'w-full md:w-1/2 flex flex-col gap-5'}>
					<AnimationOnScroll animateOnce animateIn={'animate__fadeIn'} delay={700}>
						<StyledInput
							type={'text'}
							label={'Name'}
							name={'name'}
							value={form.name}
							onChange={handleChange}
							placeholder={'John Doe'}
						/>
					</AnimationOnScroll>
					<AnimationOnScroll animateOnce animateIn={'animate__fadeIn'} delay={1000}>
						<StyledInput
							type={'text'}
							label={'Email'}
							name={'email'}
							value={form.email}
							onChange={handleChange}
							placeholder={'johndoe@somecompany.com'}
						/>
					</AnimationOnScroll>
					<AnimationOnScroll animateOnce animateIn={'animate__fadeIn'} delay={1300}>
						<StyledInput
							type={'textarea'}
							label={'Message'}
							name={'message'}
							value={form.message}
							onChange={handleChange}
							placeholder={'Hello, I would like to hire you for a project...'}
						/>
					</AnimationOnScroll>
					<AnimationOnScroll animateOnce animateIn={'animate__fadeIn'} delay={1500}>
						<StyledButton onClick={handleSubmit} className={'mt-5 rounded-full w-full'} filled>
							Contact Me
						</StyledButton>
					</AnimationOnScroll>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
