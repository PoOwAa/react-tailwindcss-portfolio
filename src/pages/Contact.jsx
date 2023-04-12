import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import { Helmet } from 'react-helmet';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			<Helmet>
				<title>Contact Me</title>
				<meta name="description" content="Contact AndyRum. Hire me for your next project!" />
				<meta name="keywords" content="web developer, blockchain, web3, backend, javascript, typescript, nodejs, solidity, ethereum, smart contracts" />
			</Helmet>
			<ContactForm />
			<ContactDetails />
		</motion.div>
	);
};

export default Contact;
