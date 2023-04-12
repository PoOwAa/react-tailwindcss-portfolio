import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
// import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const About = () => {
	return (
		<AboutMeProvider>
			<Helmet>
				<title>About Me</title>
				<meta name="description" content="AndyRum bio page. Know me more before hire!" />
				<meta name="keywords" content="web developer, blockchain, web3, backend, javascript, typescript, nodejs, solidity, ethereum, smart contracts" />
			</Helmet>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				{/* <AboutClients /> */}
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
