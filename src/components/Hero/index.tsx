import React from 'react';
import Image from 'next/image';
import Window from '@/components/shell/Window';
import Prompt from '@/components/shell/Prompt';
import profile from '@/data/profile';
import socials from '@/data/socials';
import portrait from '../../assets/images/profile.jpg';

const facts = [
	['loc', profile.location],
	['stack', profile.kernel],
	['uptime', profile.uptime],
	['focus', "evaluating Grok's code"],
	['status', 'hireable'],
];

const Hero = () => {
	return (
		<section id="home" className="grid-bg px-4 py-8 md:px-6 md:py-12">
			<div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
				<Window title="zsh — whoami.sh" aside={<span>tty1</span>} className="order-2 lg:order-1">
					<div className="flex h-full flex-col justify-between gap-6 text-[13px] leading-6 md:text-sm">
						<div>
							<Prompt command="whoami" />
							<div className="mt-3 border-l-2 border-accent/50 pl-4">
								<h1 className="text-3xl font-medium tracking-tight text-fg md:text-5xl">
									{profile.name}
								</h1>
								<p className="mt-2 text-cyan">
									{profile.role} <span className="text-dim">@</span> {profile.company}
								</p>
								<p className="mt-3 max-w-xl text-muted">
									Backend, cloud, and AI systems. {profile.uptime} shipping production software.
								</p>
								<p className="mt-2 text-comment"># {profile.tagline}</p>
							</div>
						</div>

						<div>
							<Prompt command="cat ~/.profile" />
							<dl className="mt-3 grid max-w-md grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1.5">
								{facts.map(([key, value]) => (
									<React.Fragment key={key}>
										<dt className="text-comment">{key}</dt>
										<dd className="text-fg">{value}</dd>
									</React.Fragment>
								))}
							</dl>
						</div>

						<div className="flex flex-wrap gap-2">
							<a
								href="#contact"
								className="border border-accent bg-accent px-3 py-2 text-xs text-bg hover:bg-transparent hover:text-accent"
							>
								./hire_me
							</a>
							<a
								href="#projects"
								className="border border-line px-3 py-2 text-xs text-muted hover:border-accent hover:text-accent"
							>
								ls projects
							</a>
							<a
								href={socials.github}
								target="_blank"
								rel="noreferrer"
								className="border border-line px-3 py-2 text-xs text-muted hover:border-accent hover:text-accent"
							>
								open github
							</a>
						</div>
					</div>
				</Window>

				<Window
					title="preview — profile.jpg"
					aside={<span>jpeg</span>}
					bodyClassName="p-0"
					className="order-1 lg:order-2"
				>
					<div className="relative overflow-hidden">
						<Image
							src={portrait}
							alt="Rajdip Bhattacharya"
							priority
							className="h-auto w-full"
						/>
						<div className="photo-scan pointer-events-none absolute inset-0 mix-blend-multiply" />
					</div>
				</Window>
			</div>
		</section>
	);
};

export default Hero;
