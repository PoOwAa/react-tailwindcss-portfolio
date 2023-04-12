import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 13, duration: 2 });
	useCountUp({ ref: 'codingHoursCounter', end: 9000, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 40, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
					prefix=""
				/>

				<CounterItem 
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
					prefix=""
				/>

				<CounterItem
					title="Coding hours"
					counter={<span id="codingHoursCounter" />}
					measurement=""
					prefix="Over"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
