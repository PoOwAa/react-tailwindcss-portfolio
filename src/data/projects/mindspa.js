import { TechIcon } from "../../utils/techToIcon.map";
import Mindspa from '../../images/mindspa-logo.jpg';
import MindspaCoupon from '../../images/mindspa-coupon.jpg'

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
    }
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
    ObjectivesDetails:
      'Implement multilingual support, and create an external coupon system',
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
        details:
          'To implement multilingual support, and create an external coupon system',
      },
    ],
  },
};