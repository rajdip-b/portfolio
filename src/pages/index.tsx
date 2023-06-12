import { Poppins } from 'next/font/google';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skillset from '@/components/Skillset';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Footer from '@/components/Footer';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin-ext', 'latin'],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Rajdip Bhattacharya</title>
			</Head>
			<main className={`min-h-screen bg-dark-secondary w-screen ${poppins.className}`}>
				<Navbar />
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
