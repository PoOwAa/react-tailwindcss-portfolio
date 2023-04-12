import { Helmet } from 'react-helmet';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsContext, ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<Helmet>
				<title>AndyRum - Projects</title>
				<meta name="description" content="AndyRum projects page. Make the better together, hire me!" />
				<meta name="keywords" content="web developer, blockchain, web3, backend, javascript, typescript, nodejs, solidity, ethereum, smart contracts" />
			</Helmet>
			<div className="container mx-auto">
				<ProjectsGrid context={ProjectsContext} searchBar={true}/>
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
