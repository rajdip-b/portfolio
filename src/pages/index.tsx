import { Poppins } from 'next/font/google';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skillset from '@/components/Skillset';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Footer from '@/components/Footer';
import React from 'react';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin-ext', 'latin'],
});

export default function Home() {
	const [dark, setIsDark] = React.useState(false);

	const toggleDarkMode = React.useCallback(() => setIsDark(prev => !prev), []);

	return (
		<>
			<Head>
				<title>Rajdip Bhattacharya</title>
			</Head>
			<main className={`min-h-screen bg-dark-secondary w-screen ${poppins.className} ${dark && 'dark'}`}>
				<Navbar onToggleMode={toggleDarkMode} />
				<Hero />
				<Skillset />
				<Projects />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
