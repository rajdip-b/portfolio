import React from 'react';

type Props = {
	value?: string;
	onChange?: (e: HTMLInputElement | HTMLTextAreaElement) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	type?: string;
	label?: string;
	name?: string;
};

const StyledInput: React.FC<Props> = props => {
	return (
		<div className={props.label && 'flex flex-col gap-1'}>
			{props.label && (
				<label className={'text-sm dark:text-light-primary text-dark-primary'}>{props.label}</label>
			)}
			{props.type === 'textarea' ? (
				<textarea
					name={props.name}
					rows={6}
					className={`px-4 w-full py-3 rounded-md bg-light-primary dark:bg-dark-primary outline-none dark:text-gray-300 text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 ${props.className}`}
					value={props.value}
					onChange={e => props.onChange && props.onChange(e.target)}
					placeholder={props.placeholder}
					disabled={props.disabled}
				/>
			) : (
				<input
					type={props.type || 'text'}
					name={props.name}
					className={`px-4 w-full py-3 rounded-md bg-light-primary dark:bg-dark-primary outline-none dark:text-gray-300 text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 ${props.className}`}
					value={props.value}
					onChange={e => props.onChange && props.onChange(e.target)}
					placeholder={props.placeholder}
					disabled={props.disabled}
				/>
			)}
		</div>
	);
};

export default StyledInput;
