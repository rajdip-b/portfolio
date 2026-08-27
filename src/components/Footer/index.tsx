import React from 'react';
import socials from '@/data/socials';
import profile from '@/data/profile';

const links = [
	{ label: 'github', href: socials.github },
	{ label: 'linkedin', href: socials.linkedin },
	{ label: 'x', href: socials.twitter },
	{ label: 'blog', href: socials.blog },
];

const Footer = () => {
	return (
		<footer className="border-t border-line px-4 pb-28 pt-10 md:px-6">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 text-[13px] text-muted md:flex-row md:justify-between">
				<div>
					<p className="text-fg">
						{profile.handle}
						<span className="text-dim">@</span>
						{profile.host}
					</p>
					<p className="mt-2 max-w-sm text-comment">
						# {profile.name} · {profile.role.toLowerCase()} · {profile.origin} → {profile.location}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					{links.map(link => (
						<a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-accent">
							<span className="text-dim">↗ </span>
							{link.label}
						</a>
					))}
				</div>
			</div>
			<p className="mx-auto mt-8 max-w-6xl text-[12px] text-dim">
				exit 0 · built by {profile.shortName.toLowerCase()} · no trackers
			</p>
		</footer>
	);
};

export default Footer;
