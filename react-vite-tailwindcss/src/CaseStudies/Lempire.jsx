import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const lempireContent = {
  id: 'lempire',
  title:
    'Enhancing apps, code quality, and dev capacity with Meteor.js expertise',
  featuredImageURL: '/images/case-study-lempire-1.jpg',
  featuredImageSet:
    '/images/case-study-lempire-1.jpg 1x, /images/case-study-lempire-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-lempire-logo.jpg',
  authorName: 'Mickael Faivre-Maçon',
  authorPosition: 'CTO',
  authorPhotoURL: '/images/case-study-lempire-client.jpeg',
  company: {
    name: 'Lempire',
    size: '11-50 employees',
    industry: 'Sales',
    location: 'France',
    description:
      'Email outreach solution that allows you to get more replies to your emails.',
  },
  productName: 'Lemlist',
  productURL: 'https://www.lemlist.com/ ',
  services: 'Consulting, Web Development',
  techStack: ['nodejs', 'meteor', 'blaze', 'mongo'],
  testimonial:
    "Quave's expertise in Meteor.js made a significant impact on our development process. Their guidance not only improved our code quality but also empowered our team. We're now better equipped to drive profitable growth for our B2B clients.",
  URL: RoutePaths.CASE_STUDY_LEMPIRE,
  tags: ['sales', 'consulting', 'web-dev', 'meteor'],
  text: (
    <>
      <p className="text-p mb-4">
        Lempire, a French group with a $150M valuation, specializes in aiding
        B2B businesses' profitable growth through digital products like Lemlist,
        Lemwarm, Lemverse, and Lempod. Recognizing the need for expertise in
        their primary technology stack, Meteor.js, Lempire engaged Quave for a
        consulting project.
      </p>
      <p className="text-p mb-4">
        Lempire sought Quave's experts to enhance its applications with
        Meteor.js best practices, addressing architectural issues, and improving
        existing code. The collaboration included an initial assessment where
        Quave conducted a walk-through to identify and fix architectural issues.
        Following this, Quave delved deeper into Lempire's code and
        infrastructure, proposing solutions and creating custom guidelines. We
        performed code reviews in critical commits, provided recommendations,
        and documented best practices. Regular weekly calls with Lempire's team
        were held for guidance and addressing Meteor-related queries.
      </p>
      <p className="text-p mb-4">
        The collaboration yielded significant benefits. Lempire's code quality
        improved, with architectural issues resolved. Quave's guidance empowered
        Lempire's team to work more effectively with Meteor.js. Additionally,
        Lempire integrated a full-time team member from Quave, boosting
        development capacity.
      </p>
      <p className="text-p mb-4">
        This collaboration highlights the value of seeking expert consultation
        to strengthen technical capabilities and position for growth in the
        competitive B2B market.
      </p>
    </>
  ),
};
