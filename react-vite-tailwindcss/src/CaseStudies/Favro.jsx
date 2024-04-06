import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const favroContent = {
  id: 'favro',
  title:
    'Accelerating feature delivery and market success with Favro partnership',
  featuredImageURL: '/images/case-study-favro-1.jpg',
  featuredImageSet:
    '/images/case-study-favro-1.jpg 1x, /images/case-study-favro-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-favro-logo.jpg',
  authorName: 'George Azzam',
  authorPosition: 'CTO',
  authorPhotoURL: '/images/case-study-montiapm-client.png',
  company: {
    name: 'Favro',
    industry: 'Project Management',
    location: 'Sweden',
    description:
      'Collaborative planning app for fast-growing SaaS and live games companies.',
  },
  productName: 'Favro',
  productURL: 'https://www.favro.com/',
  services: 'Meteor Upgrade, Web Development, Mobile Development',
  techStack: ['nodejs', 'meteor', 'blaze', 'mongo'],
  testimonial:
    "Quave's deep Meteor expertise and insights were key in our successful partnership.",
  URL: RoutePaths.CASE_STUDY_FAVRO,
  tags: ['project-management', 'meteor', 'web-dev', 'mobile-dev'],
  text: (
    <>
      <p className="text-p mb-4">
        Favro, a Swedish-based company established in 2016, offers a
        user-friendly planning and collaboration tool that has gained popularity
        due to its exceptional software capabilities.
      </p>
      <p className="text-p mb-4">
        Favro approached Quave with the aim of expanding their team's
        capabilities by onboarding a senior developer. The choice to collaborate
        with Quave was a strategic one, given our expertise as Meteor
        specialists and our status as a Certified Meteor Partner.
      </p>
      <p className="text-p mb-4">
        Our scope of responsibilities encompassed various tasks, including the
        development of new features, bug-fixing legacy code, implementing unit
        tests, and contributing to architectural decisions. Notably, despite our
        team being in a different timezone, we adapted our availability to align
        with Favro's requirements, ensuring seamless collaboration with their
        European team.
      </p>
      <p className="text-p mb-4">
        In addition to these responsibilities, we undertook the pivotal task of
        migrating Favro's application out of Fibers, while also keeping the app
        up-to-date with the latest Meteor releases.
      </p>
      <p className="text-p mb-4">
        The partnership between Quave and Favro proved to be highly successful,
        contributing to Favro's continued growth and success in the market.
      </p>
    </>
  ),
};
