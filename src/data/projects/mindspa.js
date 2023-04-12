import { TechIcon } from '../../utils/techToIcon.map';
import Mindspa from '../../images/mindspa-logo.jpg';
import MindspaCoupon from '../../images/mindspa-coupon.jpg';

export const projectMindspa = {
  ProjectHeader: {
    title: 'Mindspa - mental health app',
    publishDate: '2021',
    tags: 'Backend',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Mindspa - mental health app',
      img: Mindspa,
    },
    {
      id: 2,
      title: 'Mindspa - coupon site',
      img: MindspaCoupon,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'Mind Solutions Ltd',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Backend Development',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://mindspa.me',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `MindSPA is a mental health app that has over 1 million downloads and has received a 5-star rating on the app store and a 4.6 rating on Google Play. As a developer on the project, I was tasked with implementing multilingualism for the app, which resulted in a significant increase in active users, with over 100k monthly subscribers, and a 30% increase in users joining after the multilingual feature was added.`,
    Technologies: {
      title: 'Tools & Technologies',
      techs: [
        TechIcon.nodejs,
        TechIcon.typescript,
        TechIcon.nestjs,
        TechIcon.angular,
        TechIcon.postgres,
        TechIcon.gitlab,
        TechIcon.heroku,
      ],
    },
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details: `The backend of MindSPA was written in Nest.JS and the frontend was written in Angular. The main challenge of the project was to make the app accessible to a wider audience by providing translations for users who speak languages other than English.`,
      },
      {
        id: 2,
        details: `The translation process involved two main parts: translating the fixed parts of the application (such as menus, button texts, etc.) and giving the MindSPA team the ability to translate the lesson/course content themselves. The app had a lot of content, so we had to create a simple-to-use translation UI in the back-office application and implement live saving and draft/published states in case the team needed to stop working on translations. Before this feature was implemented, most of the content was stored in JSON files, which made it difficult for general users to modify.`,
      },
      {
        id: 3,
        details: `Overall, the project required a deep understanding of both frontend and backend development, as well as a focus on accessibility and user experience. The successful implementation of multilingualism in MindSPA led to a significant increase in active users and helped make the app more accessible to a wider audience.`,
      },
      {
        id: 4,
        details: `Another challenge that the MindSPA team faced was how to handle the fact that the app could no longer accept coupon codes due to changes in iOS TOS. To address this issue, we developed a dedicated coupon site for MindSPA users. Users could log in to the website with their account and enter the given coupon code. If the code was valid, the system accepted it and allowed users to use the lesson/course given by the coupon. This feature helped the MindSPA team to continue offering workshops and providing free coupon codes to users.`,
      },
    ],
  },
};
