import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const meteorContent = {
  id: 'meteor',
  title: 'Removing Fibers for MeteorJS. A successful long-term collaboration',
  featuredImageURL: '/images/case-study-meteor-1.jpg',
  featuredImageSet:
    '/images/case-study-meteor-1.jpg 1x, /images/case-study-meteor-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-meteor-logo.png',
  authorName: 'Frederico Maia',
  authorPosition: 'Meteor CEO',
  authorPhotoURL: '/images/case-study-meteor-client.jpg',
  company: {
    name: 'Meteor',
    size: '11-50',
    industry: 'Tech & Innovation',
    location: 'Canada',
    description:
      'Officially launched in 2012, Meteor is an open-source platform for building and deploying Web, Mobile, and Desktop applications in Javascript.',
  },
  productName: 'Meteor',
  productURL: 'https://www.meteor.com/',
  services: 'Web Development, Consulting',
  techStack: ['meteor', 'react', 'mongo', 'nodejs'],
  testimonial:
    "I've known Quave for a long time, so I was confident they would do a great job and support our team with these challenging demands. Their expertise with our stack and alignment with our long-term vision for Meteor was essential for the success of the operation.",
  URL: RoutePaths.CASE_STUDY_METEOR,
  tags: ['tech', 'web-dev', 'consulting', 'meteor'],
  text: (
    <>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Status Quo
      </h4>
      <p className="text-p mb-4">
        MeteorJS is a do-it-all framework for making JavaScript applications.
        It's been in the spotlight for a while. The main reason developers love
        working with Meteor.js is convenience. The development becomes more
        comfortable and faster. It's possible to launch a web MVP in less than a
        month.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">Challenge</h4>
      <p className="text-p mb-4">
        MeteorJS, like any other framework, relies on different technologies to
        make it work. These technologies are constantly evolving, and sometimes,
        incompatibilities can occur. In our case, NodeJS, a back-end JavaScript
        runtime environment crucial for Meteor, removed support for a package
        called Fibers -- responsible for making async functions possible.
      </p>
      <p className="text-p mb-4">
        The main challenge for Meteor's team was to find a reliable partner with
        lots of experience in their tech stack that could help them get rid of
        Fibers and make sure that async calls were supported.
      </p>

      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">Solution</h4>
      <p className="text-p mb-4">
        Having more than 10 years of experience with MeteorJs and having former
        Meteor CEO, Filipe Nevola, made us an obvious choice for this task.
        Since the start of this project, we've been working together as a big
        team to make sure we get rid of Fibers on time.
      </p>
      <p className="text-p mb-4">
        We helped them define a game plan and a roadmap. We identified all
        possible areas impacted by these changes and divided the task among the
        team.
      </p>
      <p className="text-p mb-4">
        We've already helped them lauch MeteorJS v2.8 and we are progressing
        toward the end goal. Release 2.8 was an important milestone as it is
        changing key APIs to expose alternative async functions to existent sync
        functions, so people don't need to wait for Fibers removal to write code
        in this new way.
      </p>
    </>
  ),
};
