import BitNinja from '../../images/bitninja-api.jpeg';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectBitninja = {
  ProjectHeader: {
    title: 'BitNinja - REST API',
    publishDate: 'Q3 2019',
    tags: 'backend, nodejs, typescript, mongodb, docker, kubernetes, aws, api, rest',
    description: `As a senior backend developer at BitNinja, I created their new public API, improving user experience and effectiveness of their server security software. My work contributed to the success of the company's mission to provide the best security software.`,
  },
  ProjectImages: [
    {
      id: 1,
      title: 'BitNinja REST API v2',
      img: BitNinja,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'BitNinja Technologies Zrt.',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Backend Development',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://bitninja.io',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Create a new REST API for BitNinja, which can handle at least 15 million requests per day.',
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.redis,
        TechIcon.rabbitmq,
        TechIcon.elasticsearch,
        TechIcon.docker,
        TechIcon.nestjs,
        TechIcon.mongo,
        TechIcon.swagger,
        TechIcon.bitbucket,
        TechIcon.mysql,
        TechIcon.jest,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'As a senior backend developer at BitNinja, I was responsible for creating their brand new public API. BitNinja is a server security software that is known to be one of the best on the market, with a real-time threat database that helps users proactively defend themselves from malwares and hackers. My work on the new API helped improve the overall user experience and effectiveness of the product.',
      },
      {
        id: 2,
        details:
          'I designed and implemented the entire API, and also refactored some microservices under the hood to optimize the system. The new API greatly improved customer engagement, with users becoming more active and starting to change settings more frequently. As a result, BitNinja caught more malwares and detected more hacking attempts.',
      },
      {
        id: 3,
        details: `I am proud to have played a key role in improving the security and protection of BitNinja users through my work on the new public API, and to have contributed to the success of the company's mission to provide the best server security software on the market.`,
      },
    ],
  },
};
