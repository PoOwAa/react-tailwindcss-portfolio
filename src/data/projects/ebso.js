import EBSO from '../../images/e-blockstock-logo.jpeg';
import BNOX from '../../images/bnox-logo.jpeg';
import Natrix from '../../images/natrix.jpeg';
import { TechIcon } from '../../utils/techToIcon.map';
import { projectCategories } from '../projectCategories';

export const projectEBSO = {
  ProjectHeader: {
    title: 'EBlockStock',
    publishDate: 'Sep 21, 2021',
    tags: 'Blockchain, crypto currency, Ethereum',
  },
    ProjectImages: [
    {
      id: 1,
      title: 'EBlockStock',
      img: EBSO,
    }
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
        details: projectCategories.crypto,
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://blockben.com',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: 'To create a crypto currency on ethereum blockchain',
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.solidity,
        TechIcon.hardhat,
        TechIcon.jest
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details: 'To create a crypto currency on ethereum blockchain',
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
      {
        id: 2,
        title: 'Bnox',
        img: BNOX,
        link: '/projects/bnox',
      },
    ],
  }
};