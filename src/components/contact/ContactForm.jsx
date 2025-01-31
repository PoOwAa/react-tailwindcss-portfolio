import { useRef, useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import {ReactComponent as Loader}  from '../../images/loading.svg';

const ContactForm = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
		setLoading(true);

    emailjs.sendForm('service_kpoz3tn', 'template_0awkgx1', form.current, 'nEGeej-CM0TI9JdXh')
      .then((result) => {
					toast.success('Message sent successfully! 🎉')
          console.log(result.text);
					setLoading(false)
					e.target.reset();
      }, (error) => {
					toast.error('Something went wrong! 😢')
					setLoading(false)
          console.log(error.text);
      });
  };

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
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
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={loading ? <Loader className="h-5 w-5"/> : "Send Message"}
							type="submit"
							aria-label="Send Message"
							disabled={loading}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
