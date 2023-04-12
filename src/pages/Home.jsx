import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsRandomContext, ProjectsRandomProvider } from '../context/ProjectsRandomContext';
import Button from '../components/reusable/Button';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div className="container mx-auto">
			<Helmet>
				<title>AndyRum</title>
				<meta name="description" content="AndyRum is a web developer from Hungary. Backend, blockchain, web3 projects are welcome!" />
				<meta name="keywords" content="web developer, blockchain, web3, backend, javascript, typescript, nodejs, solidity, ethereum, smart contracts" />
			</Helmet>
			<AppBanner></AppBanner>

			<ProjectsRandomProvider>
				<ProjectsGrid context={ProjectsRandomContext}></ProjectsGrid>
			</ProjectsRandomProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
