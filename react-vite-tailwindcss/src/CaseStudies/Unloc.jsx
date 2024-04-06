import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const unlocContent = {
  id: 'unloc',
  title: "From a broken Meteor app to a success story",
  featuredImageURL: '',
  featuredLogoURL: '/images/case-study-unloc-logo.jpg',
  authorName: 'Jay Thattai',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-unloc-client.jpeg',
  company: {
    name: 'Unloc Ltd.',
    size: '2-10 employees',
    industry: 'CRM',
    location: 'UK',
    description:
      'Purpose-built mobile app to understand customer expectations and experience, and personalize marketing to drive repeat & referral businesses.',
  },
  productName: 'CXONCLOUD',
  productURL: 'https://cxoncloud.com/',
  services: 'Web Development, Mobile App Development, DevOps',
  techStack: ['nodejs', 'meteor', 'blaze', 'mongo', 'cordova'],
  testimonial:
    'Quave has been a trusted partner in our vision to enhance customer experience of local businesses, globally. Highly recommend Quave if you have chosen Meteorjs as your platform to build and scale your applications.',
  URL: RoutePaths.CASE_STUDY_UNLOC,
  tags: ['crm', 'web-dev', 'mobile-dev', 'devops', 'performance-analysis', 'meteor'],
  text: (
    <>
      <p className="text-p mb-4">
        Unloc built CXONCLOUD, the first all-in-one customer experience
        management suite on cloud for digitally excluded and disproportionately
        affected micro-enterprises across the globe.
      </p>
      <p className="text-p mb-4">
        In 2016, when ReactJs was still proprietary to Facebook, Unloc made the
        strategic choice of using Meteorjs to build their no-code
        hyperautomation software. This decision was driven by the desire to
        harness the power of Meteor Galaxy and Atlas MongoDB, ultimately leading
        to cost savings in comparison to hiring an expensive AWS infrastructure
        team.
      </p>
      <p className="text-p mb-4">
        While the decision to utilize Meteorjs and MongoDB proved valuable,
        Unloc faced the challenge of finding experienced full-stack developers
        well-versed in Meteorjs. This skill gap remained a significant hurdle
        within the industry, even in recent times. Consequently, many SaaS
        companies remained hesitant to adopt Meteorjs despite its rapid
        deployment capabilities.
      </p>
      <p className="text-p mb-4">
        Unloc secured a substantial contract from the UK government to level up
        1000s of micro-enterprises in Northern Ireland. Coincidentally, their
        application broke due to new upgrades on Android, Cordova, Meteorjs, and
        MongoDB. They faced the challenge of finding developers with the
        expertise and willingness to take up a broken Meteor project.
      </p>
      <p className="text-p mb-4">
        In their search for a solution, Unloc reached out to Quave and
        discovered that our CEO was the former CEO of Meteor. This connection
        instilled confidence, Unloc hired Quave, and we onboarded a skilled
        Meteorjs developer who proved to be a game-changer.
      </p>
      <p className="text-p mb-4">
        The project was highly intricate, involving the consolidation of
        multiple customer record storage folders into a single folder with
        multiple fields, resulting in significant storage savings on MongoDB
        Atlas. Furthermore, we successfully upgraded various aspects of their
        application, resolving issues with Cordova, Android SDK versions, iOS
        SDK versions, Meteor versions, MongoDB versions, and third-party API
        compatibilities. The application was stabilized and brought up to date,
        a moment that was met with great relief and satisfaction.
      </p>
      <p className="text-p mb-4">
        Following this achievement, we continued to enhance their application by
        automating account creations, introducing new features, and making
        performance improvements. The result was a highly scalable, flexible,
        secure, and GDPR-compliant application.
      </p>
      <p className="text-p mb-4">
        Unloc's experience working with Quave was characterized by seamless
        collaboration and minimal paperwork. We have now become Unloc's
        strategic partner for all their software development needs, and we are
        honored to be a part of their journey.
      </p>
    </>
  ),
};
