import { projectBitninja } from './projects/bitninja';
import { projectEBSO } from './projects/ebso';
import { projectNatrix } from './projects/natrix';
import { projectCategories } from './projectCategories';
import { projectBenker } from './projects/benker';
import { projectMmmNetworkSignal } from './projects/mmm-network-signal';
import { projectAclatraz } from './projects/aclatraz';
import { projectBNOx } from './projects/bnox';
import { projectMindspa } from './projects/mindspa';

// Import images
import EBSO from '../images/e-blockstock-logo.jpeg';
import BNOX from '../images/bnox-logo.jpeg';
import BitNinja from '../images/bitninja-api.jpeg';
import Natrix from '../images/natrix.jpeg';
import Benker from '../images/benker-logo.jpg';
import MmmNetworkSignal from '../images/mmm-network-signal-logo.jpg';
import Mindspa from '../images/mindspa-logo.jpg';
import ACLatraz from '../images/ACLatraz-modal-logo.png';
import AndyBot from '../images/AndyBot-logo.jpg';
import { projectAndyBot } from './projects/andybot';

export const projectsData = [
	{
		id: 1,
		title: 'EBlockStock',
		category: projectCategories.crypto,
		img: EBSO,
		ProjectHeader: {
			title: 'EBlockStock - create a crypto currency on ethereum blockchain',
			publishDate: 'Sep 21, 2021',
			tags: 'Blockchain',
		},
		slug: 'ebso',
		details: projectEBSO
	},
	{
		id: 2,
		title: 'BNOx',
		category: projectCategories.crypto,
		img: BNOX,
		ProjectHeader: {
			title: 'BNOx - create a crypto currency on ethereum blockchain',
			publishDate: 'Sep 21, 2021',
			tags: 'Blockchain',
		},
		slug: 'bnox',
		details: projectBNOx
	},
	{
		id: 3,
		title: 'BitNinja API',
		category: projectCategories.backend,
		img: BitNinja,
		ProjectHeader: {
			title: 'BitNinja API',
			publishDate: 'Q3 2019',
			tags: 'api'
		},
		slug: 'bitninja',
		details: projectBitninja
	},
	{
		id: 4,
		title: 'Natrix',
		category: projectCategories.blockchain,
		img: Natrix,
		ProjectHeader: {
			title: 'Natrix - next generation hybrid blockchain',
			publishDate: 'Q4 2021',
			tags: 'Blockchain'
		},
		slug: 'natrix',
		details: projectNatrix
	},
	{
		id: 5,
		title: 'BENKER',
		category: projectCategories.blockchain,
		img: Benker,
		ProjectHeader: {
			title: 'BENKER - blockchain based financial solution',
			publishDate: 'Q1 2023',
			tags: 'Blockchain'
		},
		slug: 'benker',
		details: projectBenker,
	},
	{
		id: 6,
		title: 'MMM-network-signal',
		category: projectCategories.backend,
		img: MmmNetworkSignal,
		ProjectHeader: {
			title: 'MMM-network-signal',
			publishDate: 'Dec 28, 2018',
		},
		slug: 'mmm-network-signal',
		details: projectMmmNetworkSignal,
	},
	{
		id: 7,
		title: 'ACLatraz',
		category: projectCategories.backend,
		img: ACLatraz,
		ProjectHeader: {
			title: 'ACLatraz',
			publishDate: 'Mar 3, 2021',
		},
		slug: 'aclatraz',
		details: projectAclatraz,
	},
	{
		id: 8,
		title: 'MindSpa',
		category: projectCategories.backend,
		img: Mindspa,
		ProjectHeader: {
			title: 'MindSpa',
			publishDate: '2021',
		},
		slug: 'mindspa',
		details: projectMindspa,
	},
	{
		id: 9,
		title: 'AndyBot',
		category: projectCategories.backend,
		img: AndyBot,
		ProjectHeader: {
			title: 'AndyBot',
			publishDate: '2023',
		},
		slug: 'andybot',
		details: projectAndyBot,
	}
];
