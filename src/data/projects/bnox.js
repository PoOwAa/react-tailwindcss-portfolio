import BNOX from '../../images/bnox-logo.jpeg';
import Natrix from '../../images/natrix.jpeg';
import EBSO from '../../images/e-blockstock-logo.jpeg';
import { TechIcon } from '../../utils/techToIcon.map';
import { projectCategories } from '../projectCategories';

export const projectBNOx = {
  ProjectHeader: {
    title: 'BNOx',
    publishDate: 'Sep 21, 2021',
    tags: 'Blockchain, crypto currency, Ethereum',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'BNOx',
      img: BNOX,
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
        details: projectCategories.crypto,
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://blockben.com',
      },
      {
        id: 4,
        title: 'GitHub',
        details: `https://github.com/blockben-official/bnox`,
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `The objective of this project was to create a new version of BNOx, a cryptocurrency token running on the Ethereum blockchain, and migrate the current balances of every BNOx holder to the new token address. The purpose of this migration was to change the whitelist policy to blacklist policy and add some extra features to the token. Additionally, the BNOx was planned to be introduced on several trading sites, such as LBank.`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.solidity,
        TechIcon.hardhat,
        TechIcon.jest,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details: `One of the main challenges of this project was to rewrite the token code in Solidity and TypeScript while ensuring that every part of the code was well tested. Another challenge was to deploy the new BNOx token and migrate the current balances of every BNOx holder to the new token address without any errors or loss of funds. Furthermore, it was necessary to work with an audit company to check the smart contract and ensure its security. Lastly, it was important to introduce the BNOx on several trading sites to increase its market value and adoption.`,
      },
      {
        id: 2,
        details: `To overcome these challenges, I used Hardhat package to create a local blockchain and write the token in TypeScript, then compile it to Solidity code. This allowed me to test every part of the code before deployment. I managed the planning, deployment and other administrative works, such as putting the token on etherscan, and worked with an audit company to ensure the security of the smart contract. After successful deployment, BlockBen was able to introduce the BNOx on several trading sites, such as LBank, which increased its market value and adoption.`,
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
        title: 'EBlockStock',
        img: EBSO,
        link: '/projects/ebso',
      },
    ],
  },
};
