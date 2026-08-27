import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skillset from '@/components/Skillset';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Footer from '@/components/Footer';
import React from 'react';
import ToastCard from '@/components/common/ToastCard';
import OpenSource from '@/components/OpenSource';
import CommandBar from '@/components/shell/CommandBar';
import profile from '@/data/profile';

export default function Home() {
	return (
		<ToastCard>
			<Head>
				<title>{`${profile.name} — ${profile.role}`}</title>
			</Head>
			<div className="min-h-screen bg-bg font-mono text-fg">
				<Navbar />
				<main>
					<Hero />
					<Skillset />
					<Projects />
					<OpenSource />
					<Experience />
					<Contact />
				</main>
				<Footer />
				<CommandBar />
			</div>
		</ToastCard>
	);
}
