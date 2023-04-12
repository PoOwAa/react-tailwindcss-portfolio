import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { ReactComponent as Loader } from '../images/loading.svg';
import FormInput from './reusable/FormInput';

const HireMeModal = ({ onClose, onRequest }) => {
	const modalContactForm = useRef();
	const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
		setLoading(true);

    emailjs.sendForm('service_kpoz3tn', 'template_0awkgx1', modalContactForm.current, 'nEGeej-CM0TI9JdXh')
      .then((result) => {
          toast.success('Message sent successfully! 🎉')
					setLoading(false);
          console.log(result.text);
					e.target.reset();
      }, (error) => {
          toast.error('Something went wrong! 😢')
					setLoading(false);
          console.log(error.text);
      });
  };

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								Make the world better together 😉
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form
								name="modal-contact-form"
								ref={modalContactForm}
								onSubmit={sendEmail}
								className="max-w-xl m-4 text-left"
							>
								<FormInput
									inputLabel="Full Name"
									labelFor="name"
									inputType="text"
									inputId="name"
									inputName="name"
									placeholderText="Your Name"
									ariaLabelName="Name"
								/>
								<FormInput
									inputLabel="Email"
									labelFor="email"
									inputType="email"
									inputId="email"
									inputName="email"
									placeholderText="Your email"
									ariaLabelName="Email"
								/>
								<FormInput
									inputLabel="Subject"
									labelFor="subject"
									inputType="text"
									inputId="subject"
									inputName="subject"
									placeholderText="Subject"
									ariaLabelName="Subject"
								/>
								<div className="mt-6">
									<label
										className="block text-lg text-primary-dark dark:text-primary-light mb-2"
										htmlFor="message"
									>
										Message
									</label>
									<textarea
										className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Message"
										placeholder="Project description"
									></textarea>
								</div>

								<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
									<Button title={loading ? <Loader className="h-5 w-5"/> : "Send Message"} type="submit" aria-label="Send Message" disabled={loading} />
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;
