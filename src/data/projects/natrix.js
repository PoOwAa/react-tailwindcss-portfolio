import { TechIcon } from '../../utils/techToIcon.map';
import Natrix from '../../images/natrix.jpeg';
import EBSO from '../../images/e-blockstock-logo.jpeg';
import BNOX from '../../images/bnox-logo.jpeg';
import BENKER from '../../images/benker-logo.jpg';

export const projectNatrix = {
  ProjectHeader: {
    title: 'Natrix - next generation hybrid blockchain',
    publishDate: 'Q4 2021',
    tags: 'Blockchain',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Natrix - next generation hybrid blockchain',
      img: Natrix,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'BlockBen Financial Services OÜ',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Hybrid blockchain',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://blockben.com',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Create a hybrid blockchain which combines the best features of public and private blockchains.',
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.solidity,
        TechIcon.hardhat,
        TechIcon.jest,
        TechIcon.gitlab,
        TechIcon.jira,
        TechIcon.confluence,
        TechIcon.aws,
        TechIcon.kubernetes,
        TechIcon.docker,
        TechIcon.prometheus,
        TechIcon.grafana,
        TechIcon.elasticsearch,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details: 'Soon...',
      },
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'EBlockStock',
        img: EBSO,
        link: '/projects/ebso',
      },
      {
        id: 2,
        title: 'BNOx',
        img: BNOX,
        link: '/projects/bnox',
      },
      {
        id: 3,
        title: 'BENKER',
        img: BENKER,
        link: '/projects/benker',
      },
    ],
  },
};
