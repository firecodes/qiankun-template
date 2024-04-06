import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const sneakpeekContent = {
  id: 'sneakpeak',
  title:
    'Partnering with Sneakpeek to overcome technical challenges for launch',
  featuredImageURL: '',
  featuredLogoURL: '/images/case-study-sneakpeak-logo.jpg',
  authorName: 'Hans Dahlström',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-sneakpeak-client.jpeg',
  company: {
    name: 'Sneakpeek.ai',
    size: '2-10 employees',
    industry: 'Fintech',
    location: 'Sweden',
    description: 'A Swedish fintech startup using AI in the stock market.',
  },
  productName: 'Sneakpeek.ai',
  productURL: 'https://sneakpeek.ai/ ',
  services: 'Mobile App Development, DevOps',
  techStack: ['reactnative', 'meteor', 'zcloud'],
  testimonial:
    'Our collaboration with Quave has been instrumental in overcoming technical challenges and optimizing our platform. Their Meteor expertise and dedication have positioned us for a successful launch, and we look forward to a bright future together.',
  URL: RoutePaths.CASE_STUDY_SNEAKPEEK,
  tags: ['fintech', 'meteor', 'devops'],
  text: (
    <>
      <p className="text-p mb-4">
        Sneakpeek, a brand new Swedish fintech startup, is introducing AI to the
        stock market. Their primary goal is to assist investors in making
        informed decisions based on AI predictions.
      </p>
      <p className="text-p mb-4">
        Initially, Sneakpeek's CEO, Hans Dahlström, sought a Meteor expert
        company to address login/authentication issues in his React Native app,
        which combined Meteor and Expo. After discovering our Apple OAuth
        solution for Meteor on Github, Hans contacted us to inquire if we could
        provide a similar solution for his specific case.
      </p>
      <p className="text-p mb-4">
        We promptly resolved the initial challenge and embarked on several small
        projects to optimize and address outstanding issues on his app. These
        projects included resolving crash-related problems, improving responsive
        styles, addressing additional login issues, and implementing animations,
        among other tasks.
      </p>
      <p className="text-p mb-4">
        Later on, Sneakpeek decided to host their solution on Quave's cloud
        platform, zCloud. We managed the entire migration process, ensuring a
        seamless transition.
      </p>
      <p className="text-p mb-4">
        Sneakpeek is now preparing to launch its services in the near future. We
        encourage everyone to stay tuned for this exciting development in the
        fintech industry.
      </p>
    </>
  ),
};
