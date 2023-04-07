import Aclatraz from '../../images/ACLatraz-modal-logo.png';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectAclatraz = {
  ProjectHeader: {
    title: 'ACLATRAZ - A simple dependency free ACL library for Node.js',
    publishDate: 'Mar 3, 2021',
    tags: 'Backend, Node.js, Typescript, NPM, Open Source, Github, ACL',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'ACLATRAZ - A simple dependency free ACL library for Node.js',
      img: Aclatraz,
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
      {
        id: 3,
        title: 'Website',
        details: 'https://github.com/PoOwAa/aclatraz',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Create a simple dependency free ACL library for Node.js as a hobby project',
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
          `Create a simple dependency free ACL library for Node.js as a hobby project`,
      },
    ],
  },
};