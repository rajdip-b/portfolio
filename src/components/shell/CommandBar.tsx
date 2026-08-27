import React from 'react';
import socials from '@/data/socials';
import profile from '@/data/profile';

type Entry = { command: string; output: string[] };

const COMMANDS: Record<string, { output: string[]; href?: string; external?: boolean }> = {
	help: {
		output: [
			'available commands:',
			'  help          list commands',
			'  whoami        jump to hero',
			'  ls            list sections',
			'  skills        open skills',
			'  projects      open projects',
			'  oss           open pull requests',
			'  exp           open experience',
			'  mail          compose a message',
			'  github        open github',
			'  clear         clear this buffer',
		],
	},
	whoami: { output: [`${profile.name} — ${profile.role} @ ${profile.company}`], href: '#home' },
	ls: { output: ['whoami  skills  projects  oss  exp  mail'] },
	skills: { output: ['cd ~/skills'], href: '#skills' },
	projects: { output: ['cd ~/projects'], href: '#projects' },
	oss: { output: ['gh pr list --author rajdip-b'], href: '#opensource' },
	opensource: { output: ['gh pr list --author rajdip-b'], href: '#opensource' },
	exp: { output: ['git log --reverse'], href: '#experience' },
	experience: { output: ['git log --reverse'], href: '#experience' },
	mail: { output: [`compose --to ${profile.email}`], href: '#contact' },
	contact: { output: [`compose --to ${profile.email}`], href: '#contact' },
	github: { output: [socials.github], href: socials.github, external: true },
	linkedin: { output: [socials.linkedin], href: socials.linkedin, external: true },
	blog: { output: [socials.blog], href: socials.blog, external: true },
	sudo: { output: ['nice try.'] },
	vim: { output: ["you're in the browser. :q still won't save you."] },
	emacs: { output: ['loading... still loading...'] },
	coffee: { output: ['already brewing.'] },
	'rm -rf /': { output: ['not today.'] },
	clear: { output: [] },
};

const aliases: Record<string, string> = {
	'?': 'help',
	man: 'help',
	home: 'whoami',
	prs: 'oss',
	pr: 'oss',
	hire: 'mail',
};

const CommandBar = () => {
	const [input, setInput] = React.useState('');
	const [history, setHistory] = React.useState<Entry[]>([]);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const run = React.useCallback((raw: string) => {
		const command = raw.trim();
		if (!command) return;

		const key = aliases[command] || command;
		const match = COMMANDS[key];

		if (key === 'clear') {
			setHistory([]);
			return;
		}

		if (!match) {
			setHistory(prev => [
				...prev.slice(-6),
				{ command, output: [`command not found: ${command}. try 'help'.`] },
			]);
			return;
		}

		setHistory(prev => [...prev.slice(-6), { command, output: match.output }]);

		if (match.href) {
			if (match.external) {
				window.open(match.href, '_blank', 'noreferrer');
			} else {
				document.querySelector(match.href)?.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);

	return (
		<div className="fixed bottom-0 left-0 right-0 z-30 border-t border-line bg-bg/95 backdrop-blur">
			<div className="mx-auto max-w-6xl px-4 py-2 md:px-6">
				{history.length > 0 && (
					<div className="mb-2 max-h-28 overflow-y-auto text-[11px] leading-5 text-muted">
						{history.map((entry, index) => (
							<div key={`${entry.command}-${index}`} className="mb-1">
								<p>
									<span className="text-accent">visitor@rajdip.dev</span>
									<span className="text-dim">:$ </span>
									<span className="text-fg">{entry.command}</span>
								</p>
								{entry.output.map(line => (
									<p key={line} className="pl-2">
										{line}
									</p>
								))}
							</div>
						))}
					</div>
				)}
				<form
					onSubmit={event => {
						event.preventDefault();
						run(input);
						setInput('');
					}}
					className="flex items-center gap-2 text-[13px]"
				>
					<label htmlFor="cli" className="shrink-0 text-accent">
						visitor@rajdip.dev<span className="text-dim">:$</span>
					</label>
					<input
						id="cli"
						ref={inputRef}
						value={input}
						onChange={event => setInput(event.target.value)}
						autoComplete="off"
						spellCheck={false}
						placeholder="type help"
						className="w-full bg-transparent text-fg outline-none placeholder:text-dim"
					/>
				</form>
			</div>
		</div>
	);
};

export default CommandBar;
