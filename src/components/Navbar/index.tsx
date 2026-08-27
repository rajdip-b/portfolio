import React from 'react';
import socials from '@/data/socials';
import profile from '@/data/profile';
import useClock from '../../hooks/useClock';

const links = [
	{ name: 'whoami', href: '#home' },
	{ name: 'skills', href: '#skills' },
	{ name: 'projects', href: '#projects' },
	{ name: 'oss', href: '#opensource' },
	{ name: 'exp', href: '#experience' },
	{ name: 'mail', href: '#contact' },
	{ name: 'blog', href: socials.blog, external: true },
];

const Navbar = () => {
	const clock = useClock();
	const [open, setOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
			<div className="flex items-center justify-between gap-4 px-4 py-2 text-[12px] md:px-6">
				<div className="flex min-w-0 items-center gap-3 text-muted">
					<span className="shrink-0 text-accent">{profile.handle}@{profile.host}</span>
					<span className="hidden text-dim sm:inline">~/portfolio</span>
					<span className="hidden text-amber sm:inline">main*</span>
				</div>

				<nav className="hidden items-center gap-1 lg:flex">
					{links.map(link =>
						link.external ? (
							<a
								key={link.name}
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="px-2 py-1 text-muted hover:bg-raised hover:text-accent"
							>
								<span className="text-dim">./</span>
								{link.name}
							</a>
						) : (
							<a
								key={link.name}
								href={link.href}
								className="px-2 py-1 text-muted hover:bg-raised hover:text-accent"
							>
								<span className="text-dim">./</span>
								{link.name}
							</a>
						),
					)}
				</nav>

				<div className="flex items-center gap-3 text-dim">
					<span className="hidden sm:inline">{clock}</span>
					<span className="hidden text-accent sm:inline">online</span>
					<button
						className="border border-accent px-2 py-1 text-accent lg:hidden"
						onClick={() => setOpen(prev => !prev)}
						aria-expanded={open}
						aria-label="Toggle navigation"
					>
						{open ? 'close' : 'ls'}
					</button>
				</div>
			</div>

			{open && (
				<nav className="flex flex-col border-t border-line bg-panel px-4 py-3 lg:hidden">
					{links.map(link =>
						link.external ? (
							<a
								key={link.name}
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="py-2 text-sm text-muted hover:text-accent"
								onClick={() => setOpen(false)}
							>
								<span className="text-dim">$ cd </span>
								{link.name}
							</a>
						) : (
							<a
								key={link.name}
								href={link.href}
								className="py-2 text-sm text-muted hover:text-accent"
								onClick={() => setOpen(false)}
							>
								<span className="text-dim">$ cd </span>
								{link.name}
							</a>
						),
					)}
				</nav>
			)}
		</header>
	);
};

export default Navbar;
