import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';
import { Helmet } from 'react-helmet';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<Helmet>
				<title>{singleProjectData.ProjectHeader.title}</title>
				<meta name="description" content={singleProjectData.ProjectHeader.description} />
				<meta name="keywords" content={singleProjectData.ProjectHeader.tags} />
			</Helmet>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
