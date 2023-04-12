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
      'The objective of the ACLatraz project was to create a dependency-free access control library for Node.js that could generate short permission tokens for granting/rejecting access to specific resources without relying on external resources like databases. The library would grant or revoke permissions on the fly by loading all available permissions during the application start and modifying the list only when changes were made in the database.',
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
        details: `The primary challenge was creating an efficient encode/decode process that could handle the bit transformations required for generating permission tokens. Additionally, the library needed to be well-typed to support easy usage and ensure code stability. Another challenge was to create example projects using the library to demonstrate its usage.`,
      },
      {
        id: 2,
        details: `To address the challenge of encoding and decoding the permission tokens, the ACLatraz library utilized bit transformations by changing the bit representation of the unique integer IDs of the granted permissions to create token numbers. These numbers were then chunked into 32 bits, converted to hexadecimal, and concatenated with a "-" sign. This resulted in the creation of short and efficient permission tokens. For example, the following permission token 00100000-00000000-08000000-80000007-80021004-00000002-01260025 encodes the permission IDs: 1, 3, 6, 18, 19, 22, 25, 34, 67, 77, 82, 96, 97, 98, 99, 128, 156, 213. Additionally, the library was written in TypeScript, ensuring strong typing and code stability. To demonstrate the usage of the library, I created example projects using popular Node.js frameworks like Express.js, Fastify, and Nest.JS.`,
      },
    ],
  },
};
