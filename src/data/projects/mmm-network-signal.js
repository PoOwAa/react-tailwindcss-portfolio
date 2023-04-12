import MmmNetworkSignal from '../../images/mmm-network-signal-logo.jpg';
import { TechIcon } from '../../utils/techToIcon.map';

export const projectMmmNetworkSignal = {
  ProjectHeader: {
    title: 'MMM Network Signal',
    publishDate: 'Dec 28, 2018',
    tags: 'Backend, Node.js, Github',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'MMM Network Signal',
      img: MmmNetworkSignal,
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
        details: 'https://github.com/PoOwAa/MMM-network-signal',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `The objective of the MMM Network Signal project was to create a simple web app that would display the current network signal strength of the Raspberry Pi that it was running on. The app would be used to monitor the signal strength of the Raspberry Pi.`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [TechIcon.nodejs, TechIcon.npm, TechIcon.github],
    },
    ProjectDetailsHeading: 'Challenge & Solution',
    ProjectDetails: [
      {
        id: 1,
        details: `When I discovered the Magic Mirror 2 framework, I noticed that there were modules available to measure the internet speed of the underlying Raspberry Pi. However, I found that the existing modules were poorly written and used up all of the bandwidth of the Pi, making it difficult to use the mirror for other purposes while the speed was being tested. I realized that I needed to create a new module that would measure the connection stability in a more efficient way.`,
      },
      {
        id: 2,
        details: `I decided to create a module that would ping a specific server (Google DNS server by default) and display the results on the mirror as a simple signal. To create this module, I read the MMM docs to learn how to create a module and publish it to the MMM community. With this knowledge, I wrote the first version of the MMM-Network-Signal module in Node.JS, which received positive feedback from users.`,
      },
      {
        id: 3,
        details: `As the project gained popularity, I received contributions from other individuals who helped with design improvements and translations. At first, the module had only a WiFi logo to show the connection, but with the help of others, we were able to implement a text-based solution that was more accessible and user-friendly. I am proud to have created a simple yet effective solution for a problem that many Magic Mirror 2 users faced.`,
      },
    ],
  },
};
