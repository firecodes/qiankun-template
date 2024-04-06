import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const montiApmContent = {
  id: 'montiapm',
  title: 'MontiAPM collaboration: key system optimizations and Meteor upgrade',
  featuredImageURL: '/images/case-study-monti-apm-1.jpg',
  featuredImageSet:
    '/images/case-study-monti-apm-1.jpg 1x, /images/case-study-monti-apm-1@2x.jpg 2x,',
  featuredLogoURL: '/images/case-study-montiapm-logo.jpg',
  authorName: 'Micaiah Nissen',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-montiapm-client.png',
  company: {
    name: 'MontiAPM',
    size: '2-10 employees',
    industry: 'Tech & Innovation',
    location: 'USA',
    description:
      'App monitoring solution to improve performance and fix errors.',
  },
  productName: 'MontiAPM',
  productURL: 'https://montiapm.com/',
  services: 'Web Development, Meteor Upgrade',
  techStack: ['typescript', 'nodejs', 'svelte', 'blaze'],
  testimonial:
    'Quave has proven to be a great business partner. I fully rely on their expertise to continually enhance MontiAPM.',
  URL: RoutePaths.CASE_STUDY_MONTIAPM,
  tags: ['tech', 'web-dev', 'meteor'],
  text: (
    <>
      <p className="text-p mb-4">
        MontiAPM, a solution designed for monitoring app performance in Meteor
        apps, plays a crucial role in providing insights into app operations. It
        aids in pinpointing valuable optimizations and enhancing the overall
        user experience.
      </p>
      <p className="text-p mb-4">
        With a growing backlog, MontiAPM made the strategic move to outsource
        some of its work to a third-party company. Quave emerged as the natural
        choice, given our extensive expertise in the Meteor framework.
      </p>
      <p className="text-p mb-4">
        In addition to maintaining an open-source Application Performance
        Monitoring agent for MontiAPM and its related private services, we
        undertook a significant overhaul of their Stripe-integrated payment
        system. Furthermore, we are at the forefront of a pivotal project to
        upgrade the MontiAPM agent to the next version of the Meteor framework.
        This upgrade involves removing Node Fibers and implementing Async Hooks
        and Async Local Storage.
      </p>
    </>
  ),
};
