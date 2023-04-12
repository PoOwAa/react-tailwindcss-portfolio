import Benker from '../../images/benker-logo.jpg';
import Natrix from '../../images/natrix.jpeg';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectBenker = {
  ProjectHeader: {
    title: 'Benker - control of your own money',
    publishDate: '2022',
    tags: 'Blockchain, Node.JS, TypeScript',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Benker - control of your own money',
      img: Benker,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'BENKER UAB',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Blockchain Development',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://benker.io',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `The objective of the project was to design and implement a hybrid blockchain for Benker.io, a European blockchain-based financial institution. The system needed to handle a high volume of transactions, up to 100,000 per second, while maintaining the security and transparency required for a financial platform.`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.nestjs,
        TechIcon.jest,
        TechIcon.mongo,
        TechIcon.gitlab,
        TechIcon.aws,
        TechIcon.kubernetes,
        TechIcon.docker,
        TechIcon.prometheus,
        TechIcon.grafana,
        TechIcon.jira,
        TechIcon.confluence,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details: `The main challenge for the project was the slow transaction speed of blockchain technology. To handle the required volume of transactions, we needed to find a solution that could scale the system while maintaining the security and transparency of the blockchain.`,
      },
      {
        id: 2,
        details: `To address the challenge of slow transaction speeds, we implemented a hybrid blockchain using microservices, 2-phase commit transactions, message queues, and a unique ZK proof algorithm to verify every transaction. The microservices architecture allowed for easy scalability by enabling the system to process transactions in parallel. The 2-phase commit transactions ensured data consistency across all nodes in the network. The message queues allowed for the decoupling of components, and the ZK proof algorithm provided a secure and efficient method for verifying transactions. Additionally, we optimized the blockchain for performance by using a more efficient consensus algorithm that reduced the time it took to validate transactions.`,
      },
      {
        id: 3,
        details: `Overall, the hybrid blockchain design and implementation for Benker.io allowed for high transaction speeds, scalability, security, and transparency, providing users with a reliable and efficient financial platform.`,
      },
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'Natrix - next generation hybrid blockchain',
        img: Natrix,
        link: '/projects/natrix',
      },
    ],
  },
};
