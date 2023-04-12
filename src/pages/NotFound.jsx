import { Link } from 'react-router-dom';
import Button from '../components/reusable/Button';
import notFoundLight from '../images/not-found-light.svg';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>404 - Page not found</title>
        <meta name="description" content="404 - Page not found" />
        <meta name="keywords" content="web developer, blockchain, web3, backend, javascript, typescript, nodejs, solidity, ethereum, smart contracts" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className="w-full text-center">
        <motion.div>
          <img
            src={notFoundLight}
            alt="404 - Page not found"
            className="w-1/2 mx-auto"
          />
        </motion.div>  
        <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-normal text-gray-500 dark:text-gray-200">
          The page you are looking for does not exist.
        </p>


        <div className="flex justify-center">
          <Link
            to="/"
            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300 mt-5"
            aria-label="Go to Home"
          >
            <Button title="Go to home" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;