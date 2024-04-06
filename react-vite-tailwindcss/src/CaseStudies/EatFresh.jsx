import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const eatFreshContent = {
  id: 'eatfresh',
  title: "Upgrading the Meteor version for Eat Fresh Tech's 15+ apps",
  featuredImageURL: '',
  featuredLogoURL: '/images/case-study-eatfresh-logo.jpg',
  authorName: 'Matt Durr',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-eatfresh-client.jpg',
  company: {
    name: 'Eat Fresh Tech',
    size: '2-10 employees',
    industry: 'E-commerce',
    location: 'USA',
    description:
      'Dedicated e-commerce platform for growing meal prep companies.',
  },
  productName: 'Eat Fresh Tech',
  productURL: 'https://eatfresh.tech/ ',
  services: 'Meteor Upgrade',
  techStack: ['nodejs', 'meteor', 'zcloud'],
  testimonial:
    'Wow guys, I don’t know how you did the Meteor upgrade with so few changes! Every time I tried, it seemed I needed to rewrite tons of code to work with newer packages.',
  URL: RoutePaths.CASE_STUDY_EATFRESH,
  tags: ['e-commerce', 'web-dev', 'dev-ops', 'meteor'],
  text: (
    <>
      <p className="text-p mb-4">
        With over 5,000+ users, 170,000+ orders, and 850,000+ meals, Eat Fresh
        Tech continues to expand its e-commerce platform in the United States.
        Currently managing 15+ Meteor Apps and hosting their solution on zCloud,
        Eat Fresh Tech embarked on a journey to upgrade the Meteor version of
        their platform.
      </p>
      <p className="text-p mb-4">
        Previous attempts at the upgrade had proven challenging for Eat Fresh
        Tech, primarily due to issues related to incompatible packages. In light
        of these challenges, they sought the assistance of Quave, as we are
        recognized Meteor experts and a Certified Meteor Partner.
      </p>
      <p className="text-p mb-4">
        Quave took on the task and completed the migration to the latest Meteor
        version in less than a week. The Eat Fresh Tech team's response upon
        hearing that the upgrade was successfully finalized was an enthusiastic
        "Wow."
      </p>
      <p className="text-p mb-4">
        This case study serves as a testament to the challenges involved in app
        migration and highlights the significant advantages of seeking expert
        guidance. Eat Fresh Tech not only overcame obstacles efficiently but
        also saved valuable time and resources while focusing on its core
        business.
      </p>
    </>
  ),
};
