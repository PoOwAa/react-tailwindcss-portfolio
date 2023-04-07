import { useState, createContext } from 'react';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectDetails }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		projectDetails
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
