import AndyBot from '../../images/AndyBot-logo.jpg';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectAndyBot = {
  ProjectHeader: {
    title: 'AndyBot - Just another Discord bot',
    publishDate: '2023',
    tags: 'Backend, Node.js, Typescript, Github, Discord',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'AndyBot - Just another Discord bot',
      img: AndyBot,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'AndyRum',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Hobby Project',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      `Create a simple Discord bot which can play music and do other stuff`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.npm,
        TechIcon.github,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          `Create a simple Discord bot which can play music and do other stuff`,
      },
    ],
  },
};